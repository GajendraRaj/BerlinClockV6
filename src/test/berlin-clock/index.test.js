import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import BerlinClock from "../../component/berlin-clock";
import Seconds from "../../component/berlin-clock/seconds";
import Hours from "../../component/berlin-clock/hours";
import Minutes from "../../component/berlin-clock/minutes";

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

  it("should render the Minutes component", () => {
    expect(wrapper.find("Minutes").length).toEqual(1);
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
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should pass Y for even second value", () => {
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("Y");
  });

  it("should pass O for odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"00:00:59"} />);
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

  it("should render RRRR for '20' hour to '23' hours", () => {
    const wrapper = shallow(<BerlinClock time={"20"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[0]).toEqual("RRRR");
  });
});

describe("Single Hours Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00"} />);
  });

  it("should pass OOOO for '00' hour", () => {
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("OOOO");
  });

  it("should render ROOO for '01' hour", () => {
    const wrapper = shallow(<BerlinClock time={"01:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("ROOO");
  });

  it("should render RROO for '02' hour", () => {
    const wrapper = shallow(<BerlinClock time={"02:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RROO");
  });

  it("should render RRRO for '03' hour", () => {
    const wrapper = shallow(<BerlinClock time={"03:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RRRO");
  });

  it("should render RRRR for '04' hour", () => {
    const wrapper = shallow(<BerlinClock time={"04:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RRRR");
  });

  it("should render OOOO when hours/5 gives '0' reminder", () => {
    const wrapper = shallow(<BerlinClock time={"05:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("OOOO");
  });

  it("should render ROOO when hours/5 gives '1' reminder", () => {
    const wrapper = shallow(<BerlinClock time={"06:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("ROOO");
  });
  it("should render RROO when hours/5 gives '2' reminder", () => {
    const wrapper = shallow(<BerlinClock time={"07:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RROO");
  });

  it("should render RRRO when hours/5 gives '3' reminder", () => {
    const wrapper = shallow(<BerlinClock time={"08:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RRRO");
  });

  it("should render RRRR when hours/5 gives '4' reminder", () => {
    const wrapper = shallow(<BerlinClock time={"09:00"} />);
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours[1]).toEqual("RRRR");
  });
});

describe("Five Minutes Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should return OOOOOOOOOOO for '00' minutes", () => {
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("OOOOOOOOOOO");
  });

  it("should render OOOOOOOOOOO for '00' minutes to '04' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:03:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("OOOOOOOOOOO");
  });

  it("should render YOOOOOOOOOO for '05' minutes to '09' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:05:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YOOOOOOOOOO");
  });

  it("should render YYOOOOOOOOO for '10' minutes to '14' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:10:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYOOOOOOOOO");
  });

  it("should render YYROOOOOOOO for '15' minutes to '19' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:15:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYROOOOOOOO");
  });

  it("should render YYRYOOOOOOO for '20' minutes to '24' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:20:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYOOOOOOO");
  });

  it("should render YYRYYOOOOOO for '25' minutes to '29' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:25:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYOOOOOO");
  });

  it("should render YYRYYROOOOO for '30' minutes to '34' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:30:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYROOOOO");
  });

  it("should render YYRYYRYOOOO for '35' minutes to '39' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:35:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYOOOO");
  });

  it("should render YYRYYRYYOOO for '40' minutes to '44' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:40:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYYOOO");
  });

  it("should render YYRYYRYYROO for '45' minutes to '49' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:45:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYYROO");
  });

  it("should render YYRYYRYYRYO for '50' minutes to '54' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:50:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYYRYO");
  });

  it("should render YYRYYRYYRYY for '55' minutes to '59' minutes", () => {
    const wrapper = shallow(<BerlinClock time={"00:55:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[0]).toEqual("YYRYYRYYRYY");
  });
});

describe("Single Minutes Row functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00:00:00"} />);
  });

  it("should return OOOO for '00' minute", () => {
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("OOOO");
  });

  it("should return YOOO for '01' minute", () => {
    const wrapper = shallow(<BerlinClock time={"00:01:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("YOOO");
  });

  it("should return YYOO for '02' minute", () => {
    const wrapper = shallow(<BerlinClock time={"00:02:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("YYOO");
  });

  it("should return YYYO for '03' minute", () => {
    const wrapper = shallow(<BerlinClock time={"00:03:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("YYYO");
  });

  it("should return YYYY for '04' minute", () => {
    const wrapper = shallow(<BerlinClock time={"00:04:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("YYYY");
  });

  it("should return OOOO when minutes/5 gives '0' reminder", () => {
    const wrapper = shallow(<BerlinClock time={"00:05:00"} />);
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes[1]).toEqual("OOOO");
  });
});
