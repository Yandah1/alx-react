import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import Notification from '../Notifications/Notifications';
import { AppContext } from './AppContext';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('renders the <Notification /> component with props', () => {
    const notificationProps = wrapper.find(Notification).props();
    expect(notificationProps.listNotifications).toBeDefined();
    expect(notificationProps.displayDrawer).toBeDefined();
    expect(notificationProps.handleDisplayDrawer).toBeDefined();
    expect(notificationProps.handleHideDrawer).toBeDefined();
  });

  it('verifies the default state of displayDrawer is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('verifies handleDisplayDrawer updates the state to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('verifies handleHideDrawer updates the state to false', () => {
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
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
  const context = {
    user: {
      email: '',
      password: '',
      isLoggedIn: true
    },
    logOut: jest.fn()
  };

  let wrapper;


  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

  it('calls logOut when control and h are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true }, logOut: logOutMock }}>
        <App />
      </AppContext.Provider>
    );
  
    const event = new KeyboardEvent('keydown', { bubbles: true, ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
  
    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  
    alertMock.mockRestore();
  });
});