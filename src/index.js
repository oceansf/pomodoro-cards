import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#d50000',
		},
		secondary: {
			main: '#388e3c',
		},
	},
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
