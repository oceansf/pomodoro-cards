import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import moment from "moment";
// eslint-disable-next-line
import format from "moment-duration-format";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import Timer from "./Timer";
import BreakTimer from "./BreakTimer";
import TimerControls from "./TimerControls";
import TomatoesCard from "./TomatoesCard";
import Nav from "./Nav";

import {
  click,
  breakChimeUp,
  breakChimeDown,
  tomatoChime,
  slideOpen,
  slideClose,
} from "../sounds";

import firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appBar: {
    margin: 0,
  },
  header: {
    marginBottom: "2rem",
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const [tomatoes, setTomatoes] = useState([]);

  const [time, setTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [breakIsActive, setBreakIsActive] = useState(false);

  const [key, setKey] = useState(0);

  const toggle = () => {
    click.play();
    setIsActive(!isActive);
  };

  const toggleBreak = () => {
    if (breakIsActive) {
      breakChimeDown.play();
    } else {
      breakChimeUp.play();
    }
    setBreakIsActive(!breakIsActive);
  };

  const reset = () => {
    click.play();
    setKey((prevKey) => prevKey + 1);
    setIsActive(false);
  };

  const addTomato = () => {
    tomatoChime.play();
    setTomatoes([...tomatoes, { id: tomatoes.length, minutes: time / 60 }]);
    // Firebase
    const itemsRef = firebase.database().ref("items");
    const item = "tomato";
    itemsRef.push(item);
    console.log(itemsRef);
  };

  const mappedTomatoes = tomatoes.map((tomato) => tomato.minutes);
  const totalTomatoes = () => {
    if (mappedTomatoes.length > 0) {
      return mappedTomatoes.reduce((a, b) => a + b);
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <ResponsiveNav /> */}
      <Nav slideOpen={slideOpen} slideClose={slideClose} />
      <Container className={classes.root} maxWidth="sm">
        <Typography className={classes.header} variant="h4">
          {isActive
            ? "Session is in progress!"
            : "Get ready to begin a session"}
        </Typography>
        {breakIsActive ? (
          <BreakTimer
            breakIsActive={breakIsActive}
            toggleBreak={toggleBreak}
            breakTime={breakTime}
            setBreakIsActive={setBreakIsActive}
            key={key}
          />
        ) : (
          <Timer
            isActive={isActive}
            toggle={toggle}
            time={time}
            addTomato={addTomato}
            setIsActive={setIsActive}
            key={key}
          />
        )}

        <TimerControls
          toggle={toggle}
          toggleBreak={toggleBreak}
          reset={reset}
          isActive={isActive}
          breakIsActive={breakIsActive}
          setTime={setTime}
          setBreakTime={setBreakTime}
        />
        <TomatoesCard tomatoes={tomatoes} />
        {tomatoes.length > 0 ? (
          <Typography variant="h4" style={{ margin: "1rem" }}>
            Total Time:{" "}
            {moment
              .duration(totalTomatoes(), "minutes")
              .format("h [hrs] m [min]")}
          </Typography>
        ) : null}
        {/* HELPER BUTTON */}
        <Button
          style={{ backgroundColor: "teal", color: "white", margin: "1rem" }}
          onClick={() => addTomato()}
        >
          Add Tomato (Test)
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default App;
