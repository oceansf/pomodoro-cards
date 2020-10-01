import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import {
	Box,
	Card,
	CardContent,
	Typography,
	Divider,
	Tooltip,
	Zoom,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const todaysDate = moment().format('MMM Do, YYYY');

const TomatoesCard = ({ tomatoes, time, darkMode }) => {
	const useStyles = makeStyles((theme) => ({
		boxShadow: {
			borderRadius: '25px',
			background: darkMode ? '#424242' : '#f4f4f4',
			boxShadow: darkMode
				? '20px 20px 25px #383838, -20px -20px 25px #4c4c4c'
				: '20px 20px 25px #dcdcdc, -20px -20px 25px #ffffff',
		},
		tomato: {
			'&:hover': {
				cursor: 'pointer',
			},
		},
	}));
	const classes = useStyles();

	const LightTooltip = withStyles((theme) => ({
		tooltip: {
			backgroundColor: '#FFF',
			color: 'rgba(0, 0, 0, 0.87)',
			boxShadow: theme.shadows[1],
			fontSize: 14,
			fontWeight: 'bold',
		},
	}))(Tooltip);

	return (
		<React.Fragment>
			<Box width="100%">
				<Card className={classes.boxShadow} elevation={0}>
					<CardContent>
						<Typography variant="h5" style={{ margin: 5 }}>
							{todaysDate}
						</Typography>
						<Divider style={{ margin: '0.5rem' }} />
						{tomatoes.length < 1 ? (
							<Typography
								variant="h6"
								style={{ textAlign: 'center', margin: 10 }}
							>
								Tomatoes go here..
							</Typography>
						) : (
							tomatoes.map((tomato) => (
								<LightTooltip
									title={`${tomato.minutes} minutes`}
									placement="top"
									TransitionComponent={Zoom}
									key={tomato.id}
								>
									<FiberManualRecordIcon
										className={classes.tomato}
										color="primary"
										fontSize="large"
										key={tomato.id}
									/>
								</LightTooltip>
							))
						)}
					</CardContent>
				</Card>
			</Box>
		</React.Fragment>
	);
};

export default TomatoesCard;
