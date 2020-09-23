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
		background: '#F4F4F4',
		boxShadow: '20px 20px 25px #d5d5d5, -20px -20px 25px #ffffff',
	},
}));

const Timer = ({ breakIsActive, toggleBreak, breakTime, key }) => {
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
					isPlaying={breakIsActive ? true : false}
					duration={breakTime}
					key={key}
					size={250}
					strokeLinecap="square"
					colors={[['#5efc82']]}
					onComplete={() => {
						toggleBreak();
						console.log('DONE');
						return [true, 1500];
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
