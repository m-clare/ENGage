import React from 'react'
import RangeSlider from './CompoundSlider'
import { withStyles } from '@material-ui/core/styles';
import UsersByDevice from './visualization/donutChart';

class SummaryPanel extends React.Component {

	render() {

    return (
      <div>
        <UsersByDevice />
      </div>
      )
	 }
}

export default SummaryPanel