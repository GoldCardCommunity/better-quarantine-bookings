import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


let theme = createTheme({
	palette: {
    primary: {
      main: '#FF4B55'
    },
		secondary: {
      main: '#41479B'
    }

  },
	typography: {
    h1: {
			color: '#303030',
			fontSize: '46px',
			fontWeight: '500',
			letterSpacing: '0px',
			fontFamily: 'Dosis, sans-serif'
		},
    h2: {
			color: '#424242',
			fontSize: '42px',
			fontWeight: '500',
			letterSpacing: '0px',
			fontFamily: 'Dosis, sans-serif'
		},
    h6: {
			color: '#616161',
			fontWeight: '300',
			letterSpacing: '0px',
			textTransform: 'uppercase'
		},
		emailAction: {
			color: '#FF4B55',
			fontSize: '20px',
			fontWeight: '500',
			letterSpacing: '0.15px'
		},
		emailDefault: {
			color: '#757575',
			fontSize: '20px',
			fontWeight: '300',
			letterSpacing: '0.15px'
		},
		body1: {
			color: '#616161',
			fontSize: '20px',
			fontWeight: '400',
			letterSpacing: '0.15px',
		},
		body2: {
			color: '#616161',
			fontSize: '20px',
			fontWeight: '300',
			letterSpacing: '0.15px',
		},

  }
});

theme = responsiveFontSizes(theme);


ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
