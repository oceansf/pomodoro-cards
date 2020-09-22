import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Box, Card, CardContent, Typography, Divider } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const todaysDate = moment().format('MMM Do, YYYY');

const useStyles = makeStyles((theme) => ({
	boxShadow: {
		borderRadius: '25px',
		background: '#FAFAFA',
		boxShadow: '20px 20px 25px #e1e1e1, -20px -20px 25px #ffffff',
	},
}));

const TomatoesCard = ({ tomatoes }) => {
	const classes = useStyles();

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
								<FiberManualRecordIcon
									color="primary"
									fontSize="large"
									key={tomato.id}
								/>
							))
						)}
					</CardContent>
				</Card>
			</Box>
		</React.Fragment>
	);
};

export default TomatoesCard;