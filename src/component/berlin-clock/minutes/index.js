import React from "react";
import PropTypes from "prop-types";
import Lamp from "../lamp";

const Minutes = (props) => {
  return (
    <div>
      {props.minutes.map((minutes, rowIndex) => (
        <div key={rowIndex} className="hours">
          {minutes.split("").map((minute, index) => (
            <Lamp
              key={index}
              colorBlock={minute}
              width={rowIndex === 0 ? "9%" : "25%"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired,
};

export default Minutes;
