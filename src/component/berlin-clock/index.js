import React from "react";
import Seconds from "./seconds";
import Constants from "../../constant";

const BerlinClock = () => {
  return (
    <div className="clock mv4">
      <Seconds seconds={Constants.EVEN_SECOND} />
    </div>
  );
};

export default BerlinClock;
