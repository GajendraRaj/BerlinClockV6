import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import BerlinClock from "../../component/berlin-clock";
import Seconds from "../../component/berlin-clock/seconds";
import Hours from "../../component/berlin-clock/hours";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Seconds component", () => {
    expect(wrapper.find("Seconds").length).toEqual(1);
  });

  it("should render the Hours component", () => {
    expect(wrapper.find("Hours").length).toEqual(1);
  });

  it("should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: undefined },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: 12 },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});

describe("Seconds Lamp functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00"} />);
  });

  it("should pass Y for even second value", () => {
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("Y");
  });

  it("should pass O for odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"59"} />);
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("O");
  });
});

describe("Five Hours Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00"} />);
  });

  it("should render OOOO for '00' hour", () => {
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("OOOO");
  });

  it("should render OOOO for '00' hour to '04' hours", () => {
    const wrapper = shallow(<BerlinClock time={"02"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("OOOO");
  });

  it("should render ROOO for '05' hour to '09' hours", () => {
    const wrapper = shallow(<BerlinClock time={"05"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("ROOO");
  });

  it("should render RROO for '10' hour to '14' hours", () => {
    const wrapper = shallow(<BerlinClock time={"10"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("RROO");
  });

  it("should render RRRO for '15' hour to '19' hours", () => {
    const wrapper = shallow(<BerlinClock time={"15"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("RRRO");
  });
});
