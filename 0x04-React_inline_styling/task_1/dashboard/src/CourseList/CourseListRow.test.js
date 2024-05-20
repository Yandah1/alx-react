import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CourseListRow from './CourseListRow';


jest.mock('aphrodite', () => ({
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
  },
}));

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
    const wrapper = shallow(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Test Cell 1" textSecondCell="Test Cell 2" />
        </tbody>
      </table>
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(1);
    expect(td.at(0).text()).toEqual('Test Cell 1');
    expect(td.at(1).text()).toEqual('Test Cell 2');
  });
});