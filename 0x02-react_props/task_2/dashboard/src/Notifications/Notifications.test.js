import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders the component without crashing', () => {
    shallow(<NotificationItem type="default" />);
  });

  it('renders the correct html when given type and value props', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" />
    );
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders the correct html when given html prop', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(
      <NotificationItem type="default" html={htmlContent} />
    );
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(
      htmlContent
    );
  });
});