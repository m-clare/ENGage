import React from 'react'
import * as d3 from "d3";
import AppBar from '@material-ui/core/AppBar';
import RangeSlider from './CompoundSlider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import DotBarChart from './visualization/dotBarChart';


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
      <svg width="100%" height={200}> 
      <DotBarChart dotSize={10}/>
      </svg>
      </div>
      </div>
      )
	 }
}

export default withStyles(styles)(SummaryPanel)