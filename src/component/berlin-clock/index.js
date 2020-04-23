import React from "react";
import PropTypes from "prop-types";
import Seconds from "./seconds";
import Hours from "./hours";
import Constants from "../../constant";
import Minutes from "./minutes";

const BerlinClock = (props) => {
  const [hours, minutes, seconds] = props.time
    .split(":")
    .map((time) => parseInt(time));

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

  const getMinutes = (minutes) => {
    if (minutes >= 40 && minutes <= 44) {
      return ["YYRYYRYYOOO"];
    } else if (minutes >= 35 && minutes <= 39) {
      return ["YYRYYRYOOOO"];
    } else if (minutes >= 30 && minutes <= 34) {
      return ["YYRYYROOOOO"];
    } else if (minutes >= 25 && minutes <= 29) {
      return ["YYRYYOOOOOO"];
    } else if (minutes >= 20 && minutes <= 24) {
      return ["YYRYOOOOOOO"];
    } else if (minutes >= 15 && minutes <= 19) {
      return ["YYROOOOOOOO"];
    } else if (minutes >= 10 && minutes <= 14) {
      return ["YYOOOOOOOOO"];
    } else if (minutes >= 5 && minutes <= 9) {
      return ["YOOOOOOOOOO"];
    } else {
      return ["OOOOOOOOOOO"];
    }
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={second} />
      <Hours hours={getHours(hours)} />
      <Minutes minutes={getMinutes(minutes)} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
