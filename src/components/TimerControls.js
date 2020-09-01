import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },
  buttonGroup: {
    margin: "1rem",
  },
  button: {
    padding: "1rem 2rem",
  },
  breakButton: {
    padding: "1rem 2rem",
    color: "#43a047",
    borderColor: "#43a047",
    "&:hover": {
      backgroundColor: "#43a047",
      color: "white",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TimerControls = ({
  toggle,
  reset,
  isActive,
  breakIsActive,
  setTime,
  setBreakTime,
  toggleBreak,
}) => {
  const classes = useStyles();
  // Default selected menu item
  const [workTimeSelect, setWorkTimeSelect] = useState(1500);
  const [breakTimeSelect, setBreakTimeSelect] = useState(300);

  const handleWorkTimeChange = (event) => {
    reset();
    setTime(event.target.value);
    setWorkTimeSelect(event.target.value);
  };

  const handleBreakTimeChange = (event) => {
    reset();
    setBreakTime(event.target.value);
    setBreakTimeSelect(event.target.value);
  };

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Work Time
          </InputLabel>
          <Select
            className={classes.selectEmpty}
            disabled={breakIsActive ? true : false}
            color="primary"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={workTimeSelect}
            onChange={handleWorkTimeChange}
          >
            <MenuItem value={1200}>20 minutes</MenuItem>
            <MenuItem value={1500}>25 minutes</MenuItem>
            <MenuItem value={1800}>30 minutes</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label" color="secondary">
            Break Time
          </InputLabel>
          <Select
            className={classes.selectEmpty}
            disabled={breakIsActive ? true : false}
            color="secondary"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={breakTimeSelect}
            onChange={handleBreakTimeChange}
          >
            <MenuItem value={300}>5 minutes</MenuItem>
            <MenuItem value={600}>10 minutes</MenuItem>
            <MenuItem value={900}>15 minutes</MenuItem>
            <MenuItem value={1200}>20 minutes</MenuItem>
            <MenuItem value={1500}>25 minutes</MenuItem>
            <MenuItem value={1800}>30 minutes</MenuItem>
          </Select>
        </FormControl>
        <ButtonGroup
          className={classes.buttonGroup}
          disabled={breakIsActive ? true : false}
          color="primary"
          variant="contained"
          aria-label="contained primary button group"
        >
          {isActive ? (
            <Button className={classes.button} onClick={() => toggle()}>
              <PauseIcon />
            </Button>
          ) : (
            <Button className={classes.button} onClick={() => toggle()}>
              <PlayArrowIcon />
            </Button>
          )}

          <Button className={classes.button} onClick={() => reset()}>
            <StopIcon />
          </Button>
        </ButtonGroup>
        <Button
          className={classes.breakButton}
          color="secondary"
          variant="outlined"
          size="large"
          onClick={() => toggleBreak()}
        >
          Take a break
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default TimerControls;
