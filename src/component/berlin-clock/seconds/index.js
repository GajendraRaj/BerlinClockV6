import React from "react";
import PropTypes from "prop-types";

const Seconds = (props) => {
  return <div className="seconds bg-yellow" />;
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired,
};

export default Seconds;
