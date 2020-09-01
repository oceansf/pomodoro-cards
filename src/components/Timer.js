import React from "react";
import { Typography } from "@material-ui/core";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";
// eslint-disable-next-line
import momentDurationFormatSetup from "moment-duration-format";

const Timer = ({ isActive, toggle, time, addTomato, key }) => {
  return (
    <React.Fragment>
      <CountdownCircleTimer
        isPlaying={isActive ? true : false}
        duration={time}
        key={key}
        size={250}
        strokeLinecap="square"
        colors={[
          ["#e53935", 0.125],
          ["#f4511e", 0.125],
          ["#fb8c00", 0.125],
          ["#ffb300", 0.125],
          ["#fdd835", 0.125],
          ["#c0ca33", 0.125],
          ["#7cb342", 0.125],
          ["#43a047", 0.125],
        ]}
        onComplete={() => {
          toggle();
          addTomato();
          console.log("DONE");
          return [true, 0];
        }}
      >
        {({ remainingTime }) => (
          <Typography variant="h3">
            {moment.duration(remainingTime, "seconds").format()}
          </Typography>
        )}
      </CountdownCircleTimer>
    </React.Fragment>
  );
};

export default Timer;
