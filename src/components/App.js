import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import moment from 'moment';
// eslint-disable-next-line
import format from 'moment-duration-format';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import AppBar from './AppBar';
import TimerClock from './TimerClock';
import BreakTimer from './BreakTimer';
import TimerControls from './TimerControls';
import TomatoesCard from './TomatoesCard';

import { click, breakChimeUp, breakChimeDown, tomatoChime } from '../sounds';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	appBar: {
		margin: 0,
	},
	header: {
		marginTop: '4rem',
		marginBottom: '2rem',
		textAlign: 'center',
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
			<AppBar />
			<Container className={classes.root} maxWidth="sm">
				<Typography className={classes.header} variant="h4">
					{isActive
						? 'Session is in progress!'
						: 'Get ready to begin a session..'}
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
					<TimerClock
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
					<Typography variant="h4" style={{ margin: '2.5rem' }}>
						Total Time:{' '}
						{moment
							.duration(totalTomatoes(), 'minutes')
							.format('h [hrs] m [min]')}
					</Typography>
				) : null}
				{/* HELPER BUTTON */}
				<Button
					style={{ backgroundColor: 'teal', color: 'white', margin: '1rem' }}
					onClick={() => addTomato()}
				>
					Add Tomato (Test)
				</Button>
			</Container>
		</React.Fragment>
	);
};

export default App;
