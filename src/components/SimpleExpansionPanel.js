import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CreatableMulti from './helpers/MultiSelect'
import Creatable from 'react-select/creatable';
import CreatableSelect from 'react-select/creatable'

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

class SimpleExpansionPanel extends Component {
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
    this.setState({
        value: [...this.state.value, newValue],
    });
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    };

  render() {
    const { classes, inputsuggestions, title, slidercolors, ...other } = this.props

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > <Grid container>
            <Typography variant="h6">{title}</Typography>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CreatableSelect
            isMulti
            onChange={this.handleChange}
            options={inputsuggestions}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      )
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default (SimpleExpansionPanel)

