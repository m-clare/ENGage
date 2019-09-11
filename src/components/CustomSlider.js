import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import chroma from "chroma-js"
import { makeStyles, withStyles } from '@material-ui/core/styles';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

class customSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
    sliderValue: 0,
    };
  }

  handleSliderChange = (event, value) => {
    this.setState({sliderValue: value, loading: false});
    this.props.updateSliderItems({key: this.props.sliderTitle, sliderValue: value, color: this.props.color});
  }

  render() {
    const { sliderValue } = this.state;
    const { color } = this.props

  return (
    <Slider
      value={sliderValue}
      min={0}
      max={5}
      step={null}
      marks={marks}
      onChange={this.handleSliderChange}
      style={{color: color }}
    />
    )
  }
}


export default customSlider