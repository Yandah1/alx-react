import React from 'react';
import { shallow, mount } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import Notifications from './Notifications';

describe('NotificationsContainer', () => {
  let wrapper;
  const mockProps = {
    displayDrawer: false,
    listNotifications: {
      urgent: [
        { id: 1, type: 'urgent', value: 'Urgent notification', isRead: false },
      ],
      default: [
        { id: 2, type: 'default', value: 'Default notification', isRead: false },
      ],
    },
    fetchNotifications: jest.fn(),
    markNotificationAsRead: jest.fn(),
    setNotificationFilter: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer {...mockProps} />);
  });

  it('should render the Notifications component', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('should call fetchNotifications when component mounts', () => {
    expect(mockProps.fetchNotifications).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct props to the Notifications component', () => {
    const notificationsProps = wrapper.find(Notifications).props();
    expect(notificationsProps.displayDrawer).toBe(false);
    expect(notificationsProps.listNotifications).toEqual({
      urgent: [
        { id: 1, type: 'urgent', value: 'Urgent notification', isRead: false },
      ],
      default: [
        { id: 2, type: 'default', value: 'Default notification', isRead: false },
      ],
    });
    expect(notificationsProps.markNotificationAsRead).toEqual(
      mockProps.markNotificationAsRead
    );
    expect(notificationsProps.setNotificationFilter).toEqual(
      mockProps.setNotificationFilter
    );
  });

  it('should handle default props correctly', () => {
    wrapper = shallow(<NotificationsContainer />);
    expect(wrapper.prop('displayDrawer')).toBe(false);
    expect(wrapper.prop('listNotifications')).toBeNull();
    expect(wrapper.prop('markNotificationAsRead')).toEqual(expect.any(Function));
    expect(wrapper.prop('setNotificationFilter')).toEqual(expect.any(Function));
  });
});