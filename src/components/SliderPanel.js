import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import CustomSlider from './CustomSlider'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
})



class Sliders extends Component {

  createSliders = () => {
    let sliderPanel = []
    let sliderValue = this.props.chipTextBoxValue.length

    for (let i = 0; i < sliderValue; i++) {
      sliderPanel.push(
        <div styles={{'width': 'inherit'}}>
          <Typography variant="subtitle1" gutterBottom>
            {this.props.chipTextBoxValue[i]}
          </Typography>
          <CustomSlider sliderTitle={this.props.chipTextBoxValue[i]} />
        </div>
      )
    }

    return sliderPanel
  }

	render() {
		return (
      <div className="Test">
      <p>{this.props.chipTextBoxValue}</p>
      <p>{this.props.chipTextBoxValue.length}</p>
      <table>
        {this.createSliders()}
      </table>
      </div>
	  );
	}
}

export default Sliders