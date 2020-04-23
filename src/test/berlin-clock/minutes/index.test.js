import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Minutes from "../../../component/berlin-clock/minutes";

describe("Minutes component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Minutes minutes={["OOOOOOOOOOO"]} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render 11 lamps in five minutes row", () => {
    expect(wrapper.find("Lamp")).toHaveLength(11);
  });

  it("should render 15 lamps for minutes rows", () => {
    const wrapper = shallow(<Minutes minutes={["OOOOOOOOOOO", "OOOO"]} />);
    expect(wrapper.find("Lamp")).toHaveLength(15);
  });

  it("Should throw error message if there is no minutes prop", () => {
    const errorMsg =
      "Failed prop type: The prop `minutes` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minutes.propTypes,
      { minutes: undefined },
      "prop",
      Minutes.minutes
    );

    expect(result).toEqual(errorMsg);
  });
});
