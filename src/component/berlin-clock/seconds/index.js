import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Seconds = (props) => {
  const secondColor =
    props.seconds === Constants.EVEN_SECOND
      ? Constants.ACTIVE_STYLE_CLASS
      : "bg-silver";

  return <div className={`${Constants.SECONDS_STYLE_CLASS} ${secondColor}`} />;
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired,
};

export default Seconds;
