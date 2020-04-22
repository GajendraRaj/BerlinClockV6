import React from "react";
import PropTypes from "prop-types";
import Lamp from "../lamp";

const Hours = (props) => {
  return (
    <div className="hours">
      {props.hours[0].split("").map((hour, index) => (
        <Lamp key={index} colorBlock={hour} />
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired,
};

export default Hours;
