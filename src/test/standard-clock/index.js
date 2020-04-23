import React from "react";
import { shallow } from "enzyme";
import StandardClock from "../../component/standard-clock";
import checkPropTypes from "check-prop-types";

describe("StandardClock component", () => {
  const wrapper = shallow(<StandardClock time={"15:33:12"} />);

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      StandardClock.propTypes,
      { time: undefined },
      "prop",
      StandardClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      StandardClock.propTypes,
      { time: 12 },
      "prop",
      StandardClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});
