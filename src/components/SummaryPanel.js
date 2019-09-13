import React, { Component } from 'react'
import UsersByDevice from './visualization/donutChart';
import Grid from '@material-ui/core/Grid';
import CompoundSlider from './CompoundSlider';
import Paper from '@material-ui/core/Paper'

class SummaryPanel extends Component {

	render() {

    return (
    	<Grid container justify="center">
    	<Paper height="100vh">
        <UsersByDevice />
        </Paper>
        </Grid>
      )
	 }
}

export default SummaryPanel