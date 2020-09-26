import React, { useState } from 'react';
import moment from 'moment';
// eslint-disable-next-line
import format from 'moment-duration-format';
import {
	createMuiTheme,
	ThemeProvider,
	makeStyles,
} from '@material-ui/core/styles';
import {
	CssBaseline,
	Container,
	Box,
	Typography,
	Paper,
} from '@material-ui/core';
// import { Button } from '@material-ui/core';

import AppBar from './AppBar';
import TimerClock from './TimerClock';
import BreakClock from './BreakClock';
import TimerControls from './TimerControls';
import TomatoesCard from './TomatoesCard';
import Footer from './Footer';

import useSound from 'use-sound';
import bellSfx from '../sounds/chime_bell_timer.wav';
// controls sounds
import clickSfx from '../sounds/click_03.wav';
import breakStartSfx from '../sounds/chord_soft_mid_up.wav';
import breakEndSfx from '../sounds/chord_soft_mid_down.wav';
// appbar sounds
import slideOpenSfx from '../sounds/slide_right.wav';
import slideCloseSfx from '../sounds/slide_left.wav';
import snapSfx from '../sounds/click_snap_lo.wav';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	header: {
		marginTop: '4rem',
		marginBottom: '2rem',
		textAlign: 'center',
	},
	bg: {
		// paddingTop: '2em',
		// height: '100vh',
		backgroundColor: '#f4f4f4',
	},
	appBarWrapper: {
		paddingTop: '2rem',
	},
}));

const App = () => {
	const classes = useStyles();
	const [darkMode, setDarkMode] = useState(false);

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#d50000',
			},
			secondary: {
				main: '#388e3c',
			},
			type: darkMode ? 'dark' : 'light',
		},
	});

	// SOUNDS
	const [playMenuOpen] = useSound(slideOpenSfx);
	const [playMenuClose] = useSound(slideCloseSfx);
	const [playSnap] = useSound(snapSfx, { volume: 0.5 });

	// SOUNDS
	const [playClickSound] = useSound(clickSfx, { volume: 0.25 });
	const [playBreakStart] = useSound(breakStartSfx);
	const [playBreakEnd] = useSound(breakEndSfx);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const [tomatoes, setTomatoes] = useState([]);

	const [time, setTime] = useState(1500);
	const [breakTime, setBreakTime] = useState(300);
	const [isActive, setIsActive] = useState(false);
	const [breakIsActive, setBreakIsActive] = useState(false);

	const [playBell] = useSound(bellSfx);

	const [key, setKey] = useState(0);

	const toggle = () => {
		setIsActive(!isActive);
	};

	const toggleBreak = () => {
		setBreakIsActive(!breakIsActive);
	};

	const reset = () => {
		setKey((prevKey) => prevKey + 1);
		setIsActive(false);
	};

	const addTomato = () => {
		playBell();
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
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Paper className={darkMode ? null : classes.bg} elevation={0}>
					<Box className={classes.appBarWrapper}>
						<AppBar
							darkMode={darkMode}
							toggleDarkMode={toggleDarkMode}
							playMenuOpen={playMenuOpen}
							playMenuClose={playMenuClose}
							playSnap={playSnap}
						/>
					</Box>
					<Container className={classes.root} maxWidth="sm">
						<Typography className={classes.header} variant="h4">
							{isActive
								? 'Session is in progress!'
								: 'Get ready to begin a session..'}
						</Typography>
						{breakIsActive ? (
							<BreakClock
								breakIsActive={breakIsActive}
								toggleBreak={toggleBreak}
								breakTime={breakTime}
								setBreakIsActive={setBreakIsActive}
								key={key}
								darkMode={darkMode}
							/>
						) : (
							<TimerClock
								isActive={isActive}
								toggle={toggle}
								time={time}
								addTomato={addTomato}
								setIsActive={setIsActive}
								key={key}
								darkMode={darkMode}
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
							darkMode={darkMode}
							playClickSound={playClickSound}
							playBreakStart={playBreakStart}
							playBreakEnd={playBreakEnd}
						/>
						<TomatoesCard tomatoes={tomatoes} darkMode={darkMode} />
						{tomatoes.length > 0 ? (
							<Typography variant="h4" style={{ margin: '2.5rem' }}>
								Total Time:{' '}
								{moment
									.duration(totalTomatoes(), 'minutes')
									.format('h [hrs] m [min]')}
							</Typography>
						) : null}
						{/* HELPER BUTTON */}
						{/* <Button
							style={{
								backgroundColor: 'teal',
								color: 'white',
								margin: '1rem',
							}}
							onClick={() => addTomato()}
						>
							Add Tomato (Test)
						</Button> */}
					</Container>
				</Paper>
				<Footer darkMode={darkMode} />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
