import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
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