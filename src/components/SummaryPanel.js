import React from 'react'
import RangeSlider from './CompoundSlider'
import { withStyles } from '@material-ui/core/styles';
import UsersByDevice from './visualization/donutChart';

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
        <UsersByDevice />
      </div>
      )
	 }
}

export default withStyles(styles)(SummaryPanel)