import React from "react";
import PropTypes from "prop-types";
import Lamp from "../lamp";

const Hours = (props) => {
  return (
    <div>
      {props.hours.map((hours, index) => (
        <div key={index} className="hours">
          {hours.split("").map((hour, index) => (
            <Lamp key={index} colorBlock={hour} />
          ))}
        </div>
      ))}
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.array.isRequired,
};

export default Hours;
