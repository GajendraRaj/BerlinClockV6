import React from "react";
import PropTypes from "prop-types";
import Seconds from "./seconds";
import Constants from "../../constant";

const BerlinClock = (props) => {
  const second = props.time % 2 === 0 ? Constants.EVEN_SECOND : "O";
  return (
    <div className="clock mv4">
      <Seconds seconds={second} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default BerlinClock;
