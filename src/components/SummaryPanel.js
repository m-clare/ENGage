import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import RangeSlider from './CompoundSlider'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    minHeight: 48,
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

})

class SummaryPanel extends React.Component {

	render() {

    return (
      <div>
      <div>
      <AppBar position="static">
      </AppBar>
      </div>
      <div>
      </div>
      </div>
      )
	 }
}

export default withStyles(styles)(SummaryPanel)