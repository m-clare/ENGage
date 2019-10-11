import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import CompoundSlider from './CompoundSlider';
import Paper from '@material-ui/core/Paper';
import ConcentricRingChart from './visualization/donutChart';

class SummaryPanel extends Component {

	render() {

    return (
    	<Grid container justify="center">
    	<Paper height="100vh">
        <ConcentricRingChart />
        </Paper>
        </Grid>
      )
	 }
}

export default SummaryPanel