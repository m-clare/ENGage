import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import CustomSlider from './CustomSlider'

class Sliders extends Component {

  createSliders = () => {
    let sliderPanel = []
    let sliderValue = this.props.chipTextBoxValue.length

    for (let i = 0; i < sliderValue; i++) {
      sliderPanel.push(
        <div style={{'marginLeft': '2em', 'marginRight': '2em'}} key={this.props.chipTextBoxValue[i]} >
          <Typography variant="subtitle1" gutterBottom>
            {this.props.chipTextBoxValue[i]}
          </Typography>
          <CustomSlider sliderTitle={this.props.chipTextBoxValue[i]} updateSliderItems={this.props.updateSliderItems}/>
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