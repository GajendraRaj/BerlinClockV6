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
      const activeColor = hours % Constants.FIVE_LAMPS;
      const offColor = Constants.FOUR_LAMPS - activeColor;
      singleHoursRow =
        Constants.ACTIVE_COLOR.repeat(activeColor) +
        Constants.OFF_COLOR.repeat(offColor);

      return singleHoursRow;
    } else {
      singleHoursRow = Constants.OFF_COLOR.repeat(4);

      return singleHoursRow;
    }
  };

  const getFiveHoursRow = (hours) => {
    let fiveHoursRow;
    if (hours > 0) {
      const activeColor = parseInt(hours / Constants.FIVE_LAMPS);
      const offColor = Constants.FOUR_LAMPS - activeColor;
      fiveHoursRow =
        Constants.ACTIVE_COLOR.repeat(activeColor) +
        Constants.OFF_COLOR.repeat(offColor);

      return fiveHoursRow;
    } else {
      fiveHoursRow = Constants.OFF_COLOR.repeat(4);

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
