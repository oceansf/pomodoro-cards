import React, { useState } from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Footer({ darkMode }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			height: '10vh',
			backgroundColor: darkMode ? '#424242' : '#f4f4f4',
		},
	}));

	const classes = useStyles();

	return (
		<Box>
			<Paper className={classes.root} elevation={0} square />
		</Box>
	);
}

export default Footer;
