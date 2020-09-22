import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		width: '95%',
		margin: '1rem',
		padding: '0.5rem',
		borderRadius: '50px',
		background: '#f4f4f4',
		boxShadow: '020px 20px 25px #dcdcdc, -20px -20px 25px #ffffff',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static" elevation={0}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="primary"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						className={classes.title}
						color="primary"
						align={'center'}
					>
						Pomodoro Tracker
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
