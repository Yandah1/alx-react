import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import Notification from '../Notifications/Notifications';
//mport { AppContext } from './AppContext';

//describe('Test App.js', () => {
//  let wrapper;

//beforeEach(() => {
   // StyleSheetTestUtils.suppressStyleInjection();
    //wrapper = shallow(<App />);
  //});

  //afterEach(() => {
    //jest.clearAllMocks();
   // wrapper.unmount();
  //});

  //it('Renders App without crashing', () => {
    //expect(wrapper.exists()).toBe(true);
  //});

  //it('App component contains Notifications component', () => {
  //  expect(wrapper.find(Notification)).toHaveLength(1);
  //});

  //it('renders the <Notification /> component with props', () => {
    //const notificationProps = wrapper.find(Notification).props();
   // expect(notificationProps.listNotifications).toBeDefined();
    //expect(notificationProps.displayDrawer).toBeDefined();
    //expect(notificationProps.handleDisplayDrawer).toBeDefined();
    //expect(notificationProps.handleHideDrawer).toBeDefined();
  //});

  //it('verifies the default state of displayDrawer is false', () => {
    //expect(wrapper.state('displayDrawer')).toBe(false);
  //});

  //it('verifies handleDisplayDrawer updates the state to true', () => {
    //wrapper.instance().handleDisplayDrawer();
    //expect(wrapper.state('displayDrawer')).toBe(true);
  //});

  //it('verifies handleHideDrawer updates the state to false', () => {
    //wrapper.instance().handleDisplayDrawer();
    //wrapper.instance().handleHideDrawer();
    //expect(wrapper.state('displayDrawer')).toBe(false);
  //});

  //it('App component contains Header component', () => {
    //expect(wrapper.find("Header")).toHaveLength(1);
  //});

  //it('App component contains Login component', () => {
    //expect(wrapper.find("Login")).toHaveLength(1);
  //});

  //it('App component contains Footer component', () => {
    //expect(wrapper.find("Footer")).toHaveLength(1);
  //});

  //it('test to check that CourseList is not displayed inside App', () => {
    //expect(wrapper.find("CourseList")).toHaveLength(0);
  //});
//});

//describe("Testing <App isLoggedIn={true} />", () => {
 // const context = {
    user: {
      email: '',
      password: '',
      isLoggedIn: true
    },
    logOut: jest.fn()
//  };

//  let wrapper;

  //beforeEach(() => {
    //StyleSheetTestUtils.suppressStyleInjection();
    //wrapper = shallow(<App isLoggedIn={true} />);
  //});

  //afterEach(() => {
    //jest.clearAllMocks();
    //wrapper.unmount();
 // });

  //it("the Login component is not included", () => {
   // expect(wrapper.find('Login')).toHaveLength(0);
  //});

 // it("the CourseList component is included", () => {
//  });

  //it('calls logOut when control and h are pressed', () => {
    //const logOutMock = jest.fn();
    //const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Use mount to ensure componentDidMount is called
    // wrapper = mount(
      //<AppContext.Provider value={{ user: { isLoggedIn: true }, logOut: logOutMock }}>
       // <App />
      //</AppContext.Provider>
    //);

    // Dispatch the keyboard event
    // const event = new KeyboardEvent('keydown', { bubbles: true, ctrlKey: true, key: 'h' });
    //document.dispatchEvent(event);

    // Check if logOut and alert were called
    // expect(logOutMock).toHaveBeenCalledTimes(0);
    // expect(alertMock).toHaveBeenCalledWith('Logging you out');

    // Restore the mock
    //  alertMock.mockRestore();
   // wrapper.unmount();
//  });

//});
import { fromJS } from 'immutable';
import { mapStateToProps } from './App/App';

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
