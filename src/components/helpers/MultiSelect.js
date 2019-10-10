import React, { Component } from 'react';
import Creatable from 'react-select/creatable';
import CreatableSelect from 'react-select/creatable';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export default class CreatableMulti extends Component {
    constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      value: [],
      textFieldInput: '',
      sliderItems: [],
      currentIndex: null,
    }
  }
  
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    };
    render() {
      return (
        <CreatableSelect
          isMulti
          onChange={this.handleChange}
          options={colourOptions}
        />
      )
    }
}