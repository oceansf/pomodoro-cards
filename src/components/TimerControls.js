import React, { useState } from 'react';
import {
	Box,
	Button,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';

const TimerControls = ({
	toggle,
	reset,
	isActive,
	breakIsActive,
	setTime,
	setBreakTime,
	toggleBreak,
	darkMode,
	playClickSound,
	playBreakStart,
	playBreakEnd,
}) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			margin: 40,
		},
		button: {
			margin: '1rem 0.5rem',
			padding: '1rem',
			borderRadius: '100%',
			background: darkMode ? '#424242' : '#f4f4f4',
			boxShadow: darkMode
				? '8px 8px 15px #383838, -8px -8px 15px #4c4c4c'
				: '8px 8px 15px #dcdcdc, -8px -8px 15px #ffffff',
			color: '#d50000',
			transition: 'all 0.3s ease',
			'&:hover': {
				color: '#ff5131',
				background: darkMode ? '#424242' : '#F4F4F4',
				boxShadow: darkMode
					? '8px 8px 15px #383838, -8px -8px 15px #4c4c4c'
					: '8px 8px 15px #dcdcdc, -8px -8px 15px #ffffff',
			},
			'&:active': {
				color: '#9b0000',
				background: darkMode
					? 'linear-gradient(145deg, #383838, #4c4c4c, #4c4c4c)'
					: 'linear-gradient(145deg, #dcdcdc, #ffffff, #ffffff)',
			},
		},
		breakButton: {
			margin: '1rem',
			padding: '1rem 2rem',
			borderRadius: '50px',
			background: darkMode ? '#424242' : '#f4f4f4',
			boxShadow: darkMode
				? '8px 8px 15px #383838, -8px -8px 15px #4c4c4c'
				: '8px 8px 15px #dcdcdc, -8px -8px 15px #ffffff',
			color: '#00b248',
			transition: 'all 0.3s ease',
			'&:hover': {
				color: '#66ffa6',
				background: darkMode ? '#424242' : '#F4F4F4',
				boxShadow: darkMode
					? '8px 8px 15px #383838, -8px -8px 15px #4c4c4c'
					: '8px 8px 15px #dcdcdc, -8px -8px 15px #ffffff',
			},
			'&:active': {
				background: darkMode
					? 'linear-gradient(145deg, #383838, #4c4c4c, #4c4c4c)'
					: 'linear-gradient(145deg, #dcdcdc, #ffffff, #ffffff)',
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
				<Box>
					{isActive ? (
						<Button
							className={classes.button}
							variant="contained"
							disableRipple
							disabled={breakIsActive ? true : false}
							onClick={() => toggle()}
							onMouseDown={playClickSound}
						>
							<PauseIcon />
						</Button>
					) : (
						<Button
							className={classes.button}
							variant="contained"
							disableRipple
							disabled={breakIsActive ? true : false}
							onClick={() => toggle()}
							onMouseDown={playClickSound}
						>
							<PlayArrowIcon />
						</Button>
					)}

					<Button
						className={classes.button}
						variant="contained"
						disableRipple
						disabled={breakIsActive ? true : false}
						onClick={() => reset()}
						onMouseDown={playClickSound}
					>
						<StopIcon />
					</Button>
				</Box>
				<Button
					className={classes.breakButton}
					variant="contained"
					disableRipple
					size="large"
					disabled={isActive ? true : false}
					onClick={() => toggleBreak()}
					onMouseUp={breakIsActive ? playBreakEnd : playBreakStart}
				>
					Take a break
				</Button>
			</Container>
		</React.Fragment>
	);
};

export default TimerControls;
