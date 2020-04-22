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
    const fiveHoursRow = getFiveHoursRow(hours);
    const singleHoursRow = getSingleHoursRow(hours);
    const hoursColors = [fiveHoursRow, singleHoursRow];

    return hoursColors;
  };

  const getSingleHoursRow = (hours) => {
    let singleHoursRow;

    if (hours > 0) {
      const activeColor = hours % 5;
      const offColor = 4 - activeColor;
      singleHoursRow = "R".repeat(activeColor) + "O".repeat(offColor);

      return singleHoursRow;
    } else {
      singleHoursRow = "OOOO";

      return singleHoursRow;
    }
  };

  const getFiveHoursRow = (hours) => {
    let fiveHoursRow;
    if (hours > 0) {
      const activeColor = parseInt(hours / 5);
      const offColor = 4 - activeColor;
      fiveHoursRow = "R".repeat(activeColor) + "O".repeat(offColor);

      return fiveHoursRow;
    } else {
      fiveHoursRow = "OOOO";

      return fiveHoursRow;
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
