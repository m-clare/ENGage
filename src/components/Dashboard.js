import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactAutosuggest from './AutoSuggest';
import Chart from 'react-google-charts';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'auto',
    backgroundPosition: '0 400px',
    paddingBottom: 200,
    fontVariant: 'small-caps',
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    },
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
});

const fieldSuggestions = ['test1', 'test2', 'test3']

// const tabValues = 

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderItems: {},
    }
  

  this.updateSliderItems = this.updateSliderItems.bind(this);

  };

  updateSliderItems(key, value) {
    this.setState ({
      sliderItems: {
        ...this.state.sliderItems,
        key: value,
      }
    });
  }

  render() {
    const { classes } = this.props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={1} alignItems="flex-start" justify="center" container ClassName={classes.grid}>
            <Grid item xs={12} lg={11} md={11}>
              <Paper className={classes.paper}>
                <Grid container justify="center">
                  <Grid spacing={3} alignItems="flex-start" justify="center" container ClassName={classes.grid}>
                    <Grid item xs={12}>
                      <Typography variant="h6" gutterBottom>ENGage Dashboard</Typography>
                        <Typography variant="body1">
                          Skills Matrix
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid spacing={3} alignItems="flex-start" justify="center" container ClassName={classes.grid}>
                        <Grid item xs={12}>
                          <Chart
                            chartType="ScatterChart"
                            data={[['x', 'dogs'], [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9]]}
                            chartEvents={[
                              {
                                eventName: 'select',
                                callback: ({ chartWrapper }) => {
                                  const chart = chartWrapper.getChart()
                                  const selection = chart.getSelection()
                                  if (selection.length === 1) {
                                    const [selectedItem] = selection
                                    const dataTable = chartWrapper.getDataTable()
                                    const { row, column } = selectedItem
                                    alert(
                                      'You selected : ' +
                                        JSON.stringify({
                                          row,
                                          column,
                                          value: dataTable.getValue(row, column),
                                        }),
                                      null,
                                      2,
                                    )
                                  }
                                  console.log(selection)
                                },
                              },
                            ]}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <ReactAutosuggest style={{'width': '100%'}} fieldSuggestions={fieldSuggestions} sliderUpdate={this.updateSliderItems}/>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      Summary Placeholder
                      <Chart />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
         </Grid>
        </Grid>
      </div>
    </React.Fragment>
    )

  }

}

export default withRouter(withStyles(styles)(Dashboard));