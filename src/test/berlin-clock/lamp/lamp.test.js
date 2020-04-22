import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Lamp from "../../../component/berlin-clock/lamp";

describe("Hour component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Lamp index={1} colorBlock={"O"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render silver lamp", () => {
    expect(wrapper.find(".bg-silver")).toHaveLength(1);
  });

  it("should throw error message if there is no index prop", () => {
    const errorMsg =
      "Failed prop type: The prop `index` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Lamp.propTypes,
      { index: undefined, colorBlock: "R" },
      "prop",
      Lamp.index
    );

    expect(result).toEqual(errorMsg);
  });

  it("should throw error message if there is no colorBlock prop", () => {
    const errorMsg =
      "Failed prop type: The prop `colorBlock` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Lamp.propTypes,
      { index: 1, colorBlock: undefined },
      "prop",
      Lamp.colorBlock
    );

    expect(result).toEqual(errorMsg);
  });
});
