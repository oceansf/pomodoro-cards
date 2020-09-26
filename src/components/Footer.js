import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Footer({ darkMode }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			height: '20vh',
			backgroundColor: darkMode ? '#424242' : '#f4f4f4',
			textAlign: 'center',
		},
		copy: {
			position: 'relative',
			top: '80%',
		},
	}));

	const classes = useStyles();

	const date = new Date();

	return (
		<Box>
			<Paper className={classes.root} elevation={0} square>
				<footer className={classes.copy}>
					<small>&copy; {date.getUTCFullYear()} Ocean Fuaga</small>{' '}
				</footer>
			</Paper>
		</Box>
	);
}

export default Footer;
