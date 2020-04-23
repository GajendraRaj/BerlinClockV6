import React from "react";
import { shallow } from "enzyme";
import Clock from "../component/Clock";
import BerlinClock from "../component/berlin-clock";

describe("Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Clock />);
  });

  it("should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual("The Berlin Clock");
  });

  it("should render the Berlin clock component", () => {
    expect(wrapper.find(BerlinClock).length).toEqual(1);
  });

  it("should render the standard clock component", () => {
    expect(wrapper.find("StandardClock").length).toEqual(1);
  });
});
