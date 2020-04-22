import React from "react";
import PropTypes from "prop-types";
import Lamp from "../lamp";

const Minutes = (props) => {
  return (
    <div className="hours">
      {props.minutes[0].split("").map((minute, index) => (
        <Lamp key={index} colorBlock={minute} width={"9%"} />
      ))}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired,
};

export default Minutes;
