import React from 'react'
import RangeSlider from './CompoundSlider'
import { withStyles } from '@material-ui/core/styles';
import UsersByDevice from './visualization/donutChart';
import Grid from '@material-ui/core/Grid';

class SummaryPanel extends React.Component {

	render() {

    return (
    	<Grid container justify="center">
        <UsersByDevice />
        </Grid>
      )
	 }
}

export default SummaryPanel