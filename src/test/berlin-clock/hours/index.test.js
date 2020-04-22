import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Hours from "../../../component/berlin-clock/hours";

describe("Hours component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hours hours={["OOOO"]} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should throw error message if there is no hours prop", () => {
    const errorMsg =
      "Failed prop type: The prop `hours` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hours.propTypes,
      { hours: undefined },
      "prop",
      Hours.hours
    );

    expect(result).toEqual(errorMsg);
  });
});

describe("Five Hours Row", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hours hours={["OOOO"]} />);
  });

  it("should render 4 lamps  in five hours row", () => {
    expect(wrapper.find("Lamp")).toHaveLength(4);
  });
});
