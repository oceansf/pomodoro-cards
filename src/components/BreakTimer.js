import React from "react";
import { Typography } from "@material-ui/core";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";
// eslint-disable-next-line
import momentDurationFormatSetup from "moment-duration-format";

const Timer = ({
  breakIsActive,
  toggleBreak,
  breakTime,
  setBreakIsActive,
  key,
}) => {
  return (
    <React.Fragment>
      <CountdownCircleTimer
        isPlaying={breakIsActive ? true : false}
        duration={breakTime}
        key={key}
        size={250}
        strokeLinecap="square"
        colors={[["#43a047"]]}
        onComplete={() => {
          toggleBreak();
          console.log("DONE");
          return [true, 1500];
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
