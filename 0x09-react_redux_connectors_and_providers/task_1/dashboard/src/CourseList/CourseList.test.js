import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders 2 rows in thead and 1 row in tbody", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    expect(wrapper.find("thead").contains(<CourseListRow isHeader={true} textFirstCell="Available courses" />)).toBe(true);
    expect(wrapper.find("thead").contains(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />)).toBe(true);

    expect(wrapper.find("tbody").children()).toHaveLength(1);
    expect(wrapper.find("tbody").contains(<CourseListRow isHeader={false} textFirstCell="No course available yet" />)).toBe(true);
  });
});