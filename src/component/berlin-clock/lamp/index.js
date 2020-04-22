import React from "react";
import PropTypes from "prop-types";

const Lamp = (props) => {
  return (
    <div
      key={props.index}
      className="lamp-rows bg-silver"
      style={{ width: "25%" }}
    />
  );
};

Lamp.propTypes = {
  index: PropTypes.number.isRequired,
  colorBlock: PropTypes.string.isRequired,
};

export default Lamp;
