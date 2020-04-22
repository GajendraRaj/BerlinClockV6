import React from "react";
import PropTypes from "prop-types";
import Seconds from "./seconds";
import Hours from "./hours";
import Constants from "../../constant";

const BerlinClock = (props) => {
  const [hours, seconds] = props.time.split(":").map((time) => parseInt(time));

  const second =
    seconds % 2 === 0 ? Constants.EVEN_SECOND : Constants.ODD_SECOND;

  const getHours = (hours) => {
    if (hours >= 15 && hours <= 19) {
      return ["RRRO"];
    } else if (hours >= 10 && hours <= 14) {
      return ["RROO"];
    } else if (hours >= 5 && hours <= 9) {
      return ["ROOO"];
    } else {
      return ["OOOO"];
    }
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={second} />
      <Hours hours={getHours(hours)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
