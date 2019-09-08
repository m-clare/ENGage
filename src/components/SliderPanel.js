import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CustomSlider from './CustomSlider';
import chroma from "chroma-js"

class Sliders extends Component {

  color = chroma.scale(["#303f9f", "#008080"]).mode("hsl")

  createSliders = () => {
    let sliderPanel = []
    let numberSliders = this.props.chipTextBoxValue.length

    for (let i = 0; i < numberSliders; i++) {
      sliderPanel.push(
        <div key={this.props.chipTextBoxValue[i]} >
          <Typography variant="subtitle1" gutterBottom>
            {this.props.chipTextBoxValue[i]}
          </Typography>
          <CustomSlider sliderTitle={this.props.chipTextBoxValue[i]} updateSliderItems={this.props.updateSliderItems}
             color='#FFFFFF'/>
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