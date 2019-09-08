import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#357266'
    },
    primary: {
      main: '#0E3B43'
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