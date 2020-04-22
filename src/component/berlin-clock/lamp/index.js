import React from "react";
import PropTypes from "prop-types";

const Lamp = (props) => {
  const lampColor = props.colorBlock === "R" ? "bg-red" : "bg-silver";
  return (
    <div
      key={props.index}
      className={`lamp-rows ${lampColor}`}
      style={{ width: "25%" }}
    />
  );
};

Lamp.propTypes = {
  index: PropTypes.number.isRequired,
  colorBlock: PropTypes.string.isRequired,
};

export default Lamp;
