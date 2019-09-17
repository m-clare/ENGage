import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CustomSlider from './CustomSlider';
import chroma from "chroma-js"

class Sliders extends Component {  

  createSliders = (slidercolors) => {
    let sliderPanel = []
    let numberSliders = this.props.chipTextBoxValue.length

    const color = chroma.scale([slidercolors[0], slidercolors[1],
                                slidercolors[0]]).mode("lch")

    for (let i = 0; i < numberSliders; i++) {
      sliderPanel.push(
        <div key={this.props.chipTextBoxValue[i]} >
          <Typography variant="subtitle1" gutterBottom>
            {this.props.chipTextBoxValue[i]}
          </Typography>
          <CustomSlider sliderTitle={this.props.chipTextBoxValue[i]} updateSliderItems={this.props.updateSliderItems}
           color={color((i % 6) / 6).hex()}
          />
        </div>
      )
    }

    return sliderPanel
  }

	render() {
    const { slidercolors } = this.props

		return (
      <div>
        {this.createSliders(slidercolors)}
      </div>
	  );
	}
}

export default Sliders