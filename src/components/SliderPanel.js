import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import CustomSlider from './CustomSlider'

class Sliders extends Component {
    state = {
    data: [],
  };

  createSliders = () => {
    let sliderPanel = []
    let sliderValue = this.props.chipTextBoxValue.length

    for (let i = 0; i < sliderValue; i++) {
      sliderPanel.push(
        <div style={{'width': '100%', 'padding-left': '2em', 'padding-right': '2em'}}>
          <Typography variant="subtitle1" gutterBottom>
            {this.props.chipTextBoxValue[i]}
          </Typography>
          <CustomSlider sliderTitle={this.props.chipTextBoxValue[i]}/>
        </div>
      )
    }

    return sliderPanel
  }

	render() {
		return (
      <div>
        {this.createSliders()}
      </div>
	  );
	}
}

export default Sliders