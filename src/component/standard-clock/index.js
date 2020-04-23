import React from "react";
import PropTypes from "prop-types";

const StandardClock = (props) => {
  return <div>{props.time}</div>;
};

StandardClock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default StandardClock;
