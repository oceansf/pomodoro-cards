import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	ListItemText,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	SwipeableDrawer,
	List,
	Divider,
	ListItem,
	Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';

export default function ButtonAppBar({
	toggleDarkMode,
	darkMode,
	playMenuOpen,
	playMenuClose,
	playSnap,
}) {
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
			margin: 'auto',
			padding: '0.5rem',
			borderRadius: '50px',
			background: darkMode ? '#424242' : '#f4f4f4',
			boxShadow: darkMode
				? '20px 20px 25px #383838, -20px -20px 25px #4c4c4c'
				: '20px 20px 25px #dcdcdc, -20px -20px 25px #ffffff',
		},
		sunIcon: {
			color: darkMode ? '#757575' : '#d50000',
		},
		moonIcon: {
			color: darkMode ? '#d50000' : '#757575',
		},
		listHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: '1rem',
			marginRight: '2rem',
		},
		listItem: {
			transition: 'all 0.3s ease',
			'&:hover': {
				color: '#ff1744',
			},
		},
	}));
	const classes = useStyles();

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static" elevation={0}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="primary"
						aria-label="menu"
						onClick={() => {
							playMenuOpen();
							setDrawerIsOpen(!drawerIsOpen);
						}}
					>
						<MenuIcon />
					</IconButton>
					<SwipeableDrawer
						anchor="left"
						open={drawerIsOpen}
						onOpen={() => {
							setDrawerIsOpen(true);
						}}
						onClose={() => {
							playMenuClose();
							setDrawerIsOpen(false);
						}}
					>
						<List>
							<Typography
								className={classes.listHeader}
								color="primary"
								variant="h6"
							>
								<FiberManualRecordIcon fontSize="large" /> Pomodoro Tracker
							</Typography>
							<Divider />
							<ListItem button className={classes.listItem}>
								<ListItemText>TIMER</ListItemText>
							</ListItem>
							<ListItem button className={classes.listItem}>
								<ListItemText>MY CARDS</ListItemText>
							</ListItem>
							<ListItem button className={classes.listItem} divider>
								<ListItemText>ABOUT</ListItemText>
							</ListItem>
							<ListItem button className={classes.listItem}>
								<ListItemText>LOGIN</ListItemText>
							</ListItem>
						</List>
					</SwipeableDrawer>
					<Typography
						variant="h5"
						className={classes.title}
						color="primary"
						align="center"
					>
						Pomodoro Tracker
					</Typography>
					<Brightness7Icon className={classes.sunIcon} fontSize="small" />
					<Switch
						color="primary"
						size="small"
						onChange={() => {
							playSnap();
							toggleDarkMode();
						}}
					/>
					<Brightness2Icon className={classes.moonIcon} fontSize="small" />
				</Toolbar>
			</AppBar>
		</div>
	);
}
