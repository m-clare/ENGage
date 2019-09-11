import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CustomSlider from './CustomSlider';
import chroma from "chroma-js"

const color = chroma.scale(["#B6002A", "#0E3B43", "#357266",
                            "#A3BBAD", "#357266", "#0E3B43"]).mode("lch")

class Sliders extends Component {

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
           color={color((i % 12) / 12).hex()}
          />
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