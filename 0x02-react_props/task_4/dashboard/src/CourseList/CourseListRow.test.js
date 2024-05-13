import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
    expect(wrapper.find('td').length).toBe(2);
  });
});