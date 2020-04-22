import React from "react";
import { shallow } from "enzyme";
import Seconds from "../../../component/berlin-clock/seconds";
import checkPropTypes from "check-prop-types";

describe("Seconds component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Seconds seconds={"Y"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render top lamp in yellow color for even second", () => {
    expect(wrapper.find(".bg-yellow")).toHaveLength(1);
  });

  it("Should throw error message if there is no seconds prop", () => {
    const errorMsg =
      "Failed prop type: The prop `seconds` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Seconds.propTypes,
      { seconds: undefined },
      "prop",
      Seconds.seconds
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if seconds prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `seconds` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      Seconds.propTypes,
      { seconds: 12 },
      "prop",
      Seconds.seconds
    );

    expect(result).toEqual(errorMsg);
  });
});
