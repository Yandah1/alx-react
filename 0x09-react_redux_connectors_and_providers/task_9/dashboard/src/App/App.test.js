import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { mapStateToProps, mapDispatchToProps } from './App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import App from './App';

// Sample state for tests
const state = fromJS({
  ui: {
    isUserLoggedIn: true,
    isNotificationDrawerVisible: false,
  },
});

// Test mapStateToProps
describe('mapStateToProps', () => {
  it('should return the correct props from state', () => {
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

// Test mapDispatchToProps
describe('mapDispatchToProps', () => {
  it('should dispatch displayNotificationDrawer when called', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.displayNotificationDrawer();
    expect(dispatch).toHaveBeenCalledWith(displayNotificationDrawer());
  });

  it('should dispatch hideNotificationDrawer when called', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.hideNotificationDrawer();
    expect(dispatch).toHaveBeenCalledWith(hideNotificationDrawer());
  });
});

// Component tests
describe('<App />', () => {
  let wrapper;
  const defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: jest.fn(),
    hideNotificationDrawer: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<App {...defaultProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display drawer when displayDrawer is false', () => {
    expect(wrapper.find('Notification').prop('displayDrawer')).toBe(false);
  });

  it('displays drawer when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('Notification').prop('displayDrawer')).toBe(true);
  });

  it('passes handleDisplayDrawer prop to Notification', () => {
    expect(wrapper.find('Notification').prop('handleDisplayDrawer')).toBe(defaultProps.displayNotificationDrawer);
  });

  it('passes handleHideDrawer prop to Notification', () => {
    expect(wrapper.find('Notification').prop('handleHideDrawer')).toBe(defaultProps.hideNotificationDrawer);
  });
});
