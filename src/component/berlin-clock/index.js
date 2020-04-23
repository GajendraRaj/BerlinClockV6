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
    const fiveMinutesRow = getFiveMinutesRow(minutes);
    const singleMinutesRow = getSingleMinutesRow(minutes);
    const minutesColor = [fiveMinutesRow, singleMinutesRow];

    return minutesColor;
  };

  const getSingleMinutesRow = (minutes) => {
    if (minutes % 5 === 0) {
      return "OOOO";
    } else if (minutes === 4) {
      return "YYYY";
    } else if (minutes === 3) {
      return "YYYO";
    } else if (minutes === 2) {
      return "YYOO";
    } else if (minutes === 1) {
      return "YOOO";
    } else {
      return "OOOO";
    }
  };

  const getFiveMinutesRow = (minutes) => {
    let fiveMinutesRow;
    if (minutes > 0) {
      const activeLamps = Math.floor(minutes / Constants.FIVE_LAMPS);
      const activeLampsColor = getActiveLampsColor(activeLamps);
      const offColor = Constants.ELEVEN_LAMPS - activeLamps;
      fiveMinutesRow = activeLampsColor + Constants.OFF_COLOR.repeat(offColor);

      return fiveMinutesRow;
    } else {
      fiveMinutesRow = Constants.OFF_COLOR.repeat(Constants.ELEVEN_LAMPS);

      return fiveMinutesRow;
    }
  };

  const getActiveLampsColor = (activeLamps) => {
    let activeLampsColor = "";
    for (let index = 1; index <= activeLamps; index++) {
      if (index % Constants.THIRD_LAMP === 0) {
        activeLampsColor += Constants.ACTIVE_COLOR;
      } else {
        activeLampsColor += Constants.YELLOW_COLOR;
      }
    }
    return activeLampsColor;
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
