import React from 'react';
import { mount, shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct HTML with type and value props', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" />
    );
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders correct HTML with html prop', () => {
    const wrapper = mount(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({
      __html: '<u>test</u>'
    });
  });
});