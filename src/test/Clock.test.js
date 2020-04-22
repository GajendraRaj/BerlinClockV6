import React from "react";
import { shallow } from "enzyme";
import Clock from "../component/Clock";

describe("Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Clock />);
  });

  it("should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual("The Berlin Clock");
  });
});
