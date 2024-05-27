import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('Testing the <Notifications /> Component', () => {
  let wrapper;
  let consoleLogSpy;
  let handleDisplayDrawerSpy;
  let handleHideDrawerSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log');
    handleDisplayDrawerSpy = jest.fn();
    handleHideDrawerSpy = jest.fn();
    wrapper = shallow(<Notifications
      displayDrawer={false}
      listNotifications={[]}
      handleDisplayDrawer={handleDisplayDrawerSpy}
      handleHideDrawer={handleHideDrawerSpy} />
    );

  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('Notifications component', () => {
    expect(wrapper.exists()).toBe(true);
  });

    it('calls handleDisplayDrawer when menu item is clicked', () => {
      const handleDisplayDrawerMock = jest.fn();
      const wrapper = shallow(<Notifications displayDrawer={true} handleDisplayDrawer={handleDisplayDrawerMock} />);
      const menuItem = wrapper.find('.menuItem');
      menuItem.simulate('click', { button: 0 });
      expect(handleDisplayDrawerMock).toHaveBeenCalledTimes(1);
    });
  });

  it('calls handleHideDrawer when button is clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalledTimes(1);
  });

  it('should render the Notification component with the listNotifications prop', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('should render the Notification component with empty listNotifications', () => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).props().value).toBe('No new notification for now');
  });

  it('when calling the function markAsRead, the spy is being called with the right message', () => {
    const id = 1;
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{ id: id, type: 'default', value: 'New course available' }]} />);
    const instance = wrapper.instance();
    instance.markAsRead(id);
    expect(consoleLogSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
  });

  it('does not rerender when props are updated with the same list', () => {
    const list = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    wrapper = shallow(<Notifications listNotifications={list} />);
    wrapper.setProps({ listNotifications: list });
    expect(wrapper).toMatchSnapshot();
  });

  it('rerenders when props are updated with a longer list', () => {
    const list = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const longerList = [...list, { id: 3, type: 'default', value: 'Notification 3' }];
    wrapper = shallow(<Notifications listNotifications={list} />);
    wrapper.setProps({ listNotifications: longerList });
    expect(wrapper).toMatchSnapshot();
  });