import React from "react";
import PropTypes from "prop-types";
import Constants from "../../../constant";

const Lamp = (props) => {
  const lampColor =
    props.colorBlock === Constants.ACTIVE_COLOR
      ? Constants.RED_STYLE_CLASS
      : Constants.OFF_STYLE_CLASS;

  return (
    <div
      key={props.index}
      className={`${Constants.LAMP_ROW_STYLE_CLASS} ${lampColor}`}
      style={{ width: "25%" }}
    />
  );
};

Lamp.propTypes = {
  index: PropTypes.number.isRequired,
  colorBlock: PropTypes.string.isRequired,
};

export default Lamp;
