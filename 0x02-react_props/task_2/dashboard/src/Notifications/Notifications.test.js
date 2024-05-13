import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Testing the <Notifications /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<Notifications /> renders NotificationItems", () => {
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it("<Notifications /> renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });

  it("verify that the first NotificationItem element renders the right html", () => {
    expect(wrapper.find("NotificationItem").first().render().text()).toEqual('New course available');
  });
});