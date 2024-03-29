import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ChipInput from 'material-ui-chip-input'
import Sliders from './SliderPanel'
import Grid from '@material-ui/core/Grid'
import DotBarChart from './visualization/dotBarChart';

function renderInput (inputProps) {
  const { value, onChange, chips, ref, ...other } = inputProps

  return (
    <ChipInput
      fullWidthInput
      helperText='Input or select skill from list'
      clearInputValueOnChange
      onUpdateInput={onChange}
      value={chips}
      inputRef={ref}
      {...other}
    />
  )
}

function renderSuggestion (suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query)
  const parts = parse(suggestion.name, matches)

  return (
    <MenuItem
      selected={isHighlighted}
      component='div'
      onMouseDown={(e) => e.preventDefault()} // prevent the click causing the input to be blurred
    >
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <span key={String(index)}>
              {part.text}
            </span>
          )
        })}
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer (options) {
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

function getSuggestionValue (suggestion) {
  return suggestion.name
}

function getSuggestions (value, inputsuggestions) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0
    ? []
    : inputsuggestions.filter(suggestion => {
      const keep =
          count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue

      if (keep) {
        count += 1
      }

      return keep
    })
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    fullWidth: 'true',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 1
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  textField: {
    width: '100%'
  },
})

class ReactAutosuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      value: [],
      textFieldInput: '',
      sliderItems: [],
      currentIndex: null,
    };

  this.updateSliderItems = this.updateSliderItems.bind(this);
  this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
  }


  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.inputsuggestions)
    })
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  };

  handletextFieldInputChange = (event, { newValue }) => {
    this.setState({
      textFieldInput: newValue
    })
  };

  handleAddChip (chip) {
    if (this.props.allowDuplicates || this.state.value.indexOf(chip) < 0) {
      this.setState(({ value, sliderItems }) => ({
        value: [...value, chip],
        textFieldInput: '',
        sliderItems: [...sliderItems, {'key': chip, 'sliderValue': 0, 'color': '#FFFFFF'}]
      }))
    }
  }

  handleDeleteChip (chip, index) {
    this.setState(({ value, sliderItems }) => {
      const temp = value.slice();
      let filteredSliders = sliderItems.filter(function(filteredItems) {
        return filteredItems.key !== value[index];
      });
      temp.splice(index, 1);
      return {
        value: temp,
        sliderItems: filteredSliders
      }
    });
  };


  updateSliderItems (sliderObject) {
    let key = sliderObject.key;
    let sliderValue = sliderObject.sliderValue;
    let color = sliderObject.color;
    this.setState ({
      sliderItems: this.state.sliderItems.map(el => el.key === key ? Object.assign({}, el, { sliderValue, color}) : el),
    });
  }

  setCurrentIndex = currentIndex =>
    this.setState({
      currentIndex
    });

  render() {
    const { classes, suggestions, slidercolors, ...other } = this.props

    return (
      <Grid spacing={3} alignItems="flex-start" justify="center" container className={classes.grid}>
        <Grid item xs={12}>
          <svg width="100%" height={120} style={{borderBottom: '0.01em solid'}}> 
          <DotBarChart dotSize={8} data={this.state.sliderItems}/>
          </svg>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autosuggest
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion
            }}
            renderInputComponent={renderInput}
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
            renderSuggestionsContainer={renderSuggestionsContainer}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={(e, { suggestionValue }) => { this.handleAddChip(suggestionValue); e.preventDefault() }}
            focusInputOnSuggestionClick={false}
            inputProps={{
              chips: this.state.value,
              value: this.state.textFieldInput,
              onChange: this.handletextFieldInputChange,
              onAdd: (chip) => this.handleAddChip(chip),
              onDelete: (chip, index) => this.handleDeleteChip(chip, index),
              ...other
            }}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Sliders chipTextBoxValue={this.state.value} updateSliderItems={this.updateSliderItems} slidercolors={slidercolors}/>
        </Grid>
      </Grid>
    )
  }
}

ReactAutosuggest.propTypes = {
  allowDuplicates: PropTypes.bool,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ReactAutosuggest)