import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Seconds = (props) => {
  return (
    <div
      className={`${Constants.SECONDS_STYLE_CLASS} ${Constants.ACTIVE_STYLE_CLASS}`}
    />
  );
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired,
};

export default Seconds;
