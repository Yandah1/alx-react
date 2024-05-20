import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render one cell with colspan = 2 when textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Test Header" textSecondCell={null} />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
    expect(th.text()).toEqual('Test Header');
  });

  it('should render two cells when textSecondCell is not null', () => {
    const wrapper = mount(
      <CourseListRow isHeader={false} textFirstCell="Test Cell 1" textSecondCell="Test Cell 2" />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual('Test Cell 1');
    expect(td.at(1).text()).toEqual('Test Cell 2');
  });
});
