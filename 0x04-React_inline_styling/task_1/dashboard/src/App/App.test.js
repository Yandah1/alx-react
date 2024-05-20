import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists()).toBeTruthy();
  });
});

describe('Testing <App logOut={logOutMock} />', () => {
  let logOutMock;
  let alertMock;
  let wrapper;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it('calls logOut and displays alert when Ctrl+H is pressed', () => {
    const instance = wrapper.instance();
    const event = { preventDefault: jest.fn(), ctrlKey: true, key: 'h' };
    instance.handleKeyDown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  });
});


describe('render', () => {

  // Renders the Notification component with the listNotifications prop.
  it('should render the Notification component with the listNotifications prop', () => {
    const isLoggedIn = true;
    const wrapper = mount(<App isLoggedIn={isLoggedIn} />);
    expect(wrapper.find(Notifications).prop('listNotifications')).toEqual(App.listNotifications);
  });

  // If this.props.isLoggedIn is null or undefined, renders the Login component inside a BodySectionWithMarginBottom component with the title prop "Log in to continue".
  it('should render the Login component inside a BodySectionWithMarginBottom component with the title prop "Log in to continue" when this.props.isLoggedIn is null or undefined', () => {
    const isLoggedIn = null;
    const wrapper = shallow(<App isLoggedIn={isLoggedIn} />);
    expect(wrapper.find(BodySectionWithMarginBottom).prop('title')).toEqual('Log in to continue');
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  // Handles keydown event with ctrlKey + 'h' to log out
  it('should handle keydown event with ctrlKey + "h" to log out', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  // Does not log out when keydown event does not match ctrlKey + 'h'
  it('should not log out when keydown event does not match ctrlKey + "h"', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
    window.dispatchEvent(event);
    expect(logOutMock).not.toHaveBeenCalled();
  });

  // Should mark a notification as read when calling markAsRead function.
  it('should mark a notification as read when calling markAsRead function', () => {
    const id = 1;
    const notifications = mount(<Notifications />);
    const markAsReadSpy = jest.spyOn(notifications.instance(), 'markAsRead');
    notifications.instance().markAsRead(id);
    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });

  // Should toggle the displayDrawer prop to show and hide notifications.
  it('should toggle the displayDrawer prop to show and hide notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.notifications')).toHaveLength(1);
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.notifications')).toHaveLength(0);
  });
});