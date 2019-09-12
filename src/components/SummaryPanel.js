import React, { Component } from 'react'
import UsersByDevice from './visualization/donutChart';
import Grid from '@material-ui/core/Grid';
import CompoundSlider from './CompoundSlider';

class SummaryPanel extends Component {

	render() {

    return (
    	<Grid container justify="center">
        <UsersByDevice />
        <CompoundSlider />
        </Grid>
      )
	 }
}

export default SummaryPanel