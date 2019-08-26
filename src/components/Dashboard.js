import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import TabPanel from './TabPanel';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100vh',
  }
});

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

// const tabValues = 

class Dashboard extends Component {
  state = {
    amount: 15000,
    data: []
  };

  handleChangeAmount = (event, value) => {
    this.setState({amount: value, loading: false});
  }

  render() {
    const { classes } = this.props;
    const { amount } = this.state;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={1} alignItems="center" justify="center" container ClassName={classes.grid}>
            <Grid item xs={12} lg={11} md={11}>
              <Paper className={classes.paper}>
                <Grid container justify="center">
                  <Grid spacing={3} alignItems="center" justify="center" container ClassName={classes.grid}>
                    <Grid item xs={12} lg={12} md={12}>
                      <Typography variant="h6" gutterBottom>ENGage Dashboard</Typography>
                        <Typography variant="body1">
                          Skills Matrix for Structural Engineers
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TabPanel />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography variant="subtitle1" gutterBottom>
                      Reinforced Concrete
                      </Typography>
                      <Slider
                        value={amount}
                        min={0}
                        max={5}
                        step={null}
                        marks={marks}
                        onChange={this.handleChangeAmount}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      Test
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