import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import moment from 'moment';
// eslint-disable-next-line
import momentDurationFormatSetup from 'moment-duration-format';

const useStyles = makeStyles((theme) => ({
	boxShadow: {
		width: '18rem',
		height: '18rem',
		borderRadius: '100%',
		background: '#FAFAFA',
		boxShadow: '20px 20px 25px #d5d5d5, -20px -20px 25px #ffffff',
	},
}));

const Timer = ({ isActive, toggle, time, addTomato, key }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box
				className={classes.boxShadow}
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<CountdownCircleTimer
					isPlaying={isActive ? true : false}
					duration={time}
					key={key}
					size={250}
					strokeLinecap="square"
					colors={[
						['#d32f2f', 0.125],
						['#e64a19', 0.125],
						['#f57c00', 0.125],
						['#ffa000', 0.125],
						['#fbc02d', 0.125],
						['#afb42b', 0.125],
						['#689f38', 0.125],
						['#43a047', 0.125],
					]}
					onComplete={() => {
						toggle();
						addTomato();
						console.log('DONE');
						return [true, 0];
					}}
				>
					{({ remainingTime }) => (
						<Typography variant="h3">
							{moment.duration(remainingTime, 'seconds').format()}
						</Typography>
					)}
				</CountdownCircleTimer>
			</Box>
		</React.Fragment>
	);
};

export default Timer;
