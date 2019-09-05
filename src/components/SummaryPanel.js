import React from 'react'
import * as d3 from "d3";
import AppBar from '@material-ui/core/AppBar';
import RangeSlider from './CompoundSlider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles'


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
  
  // const data = [1, 5, 3]
    const numPerRow = 15;


  var array1 = [1, 2, 3, 4]
  function setTest(d) { return d3.range(d); };
  // let test = function(d, i, j) {
  function setTest2(d, i, j) { return (setTest(d), i, j); };

  console.log(setTest2(array1))



    return (
      <div>
      <AppBar position="static">
        <div>
        Summary
        </div>
      </AppBar>
      </div>
      )
	 }
}

export default withStyles(styles)(SummaryPanel)