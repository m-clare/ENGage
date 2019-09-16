import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#00BCD4"
    },
    primary: {
      main: "#35F1B5"
    },
    error: {
      main: "#FF6F00"
    }
  },
  typography: {
    fontFamily: [
     '"Lato"',
     'sans-serif'
    ].join(',')
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
        <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;