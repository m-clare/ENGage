import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

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
    color: theme.palette.text.secondary
  }
});


class Dashboard extends Component {
  state = {
    amount: 15000,
    data: []
  };

  render() {
    const { classes } = this.props;
    const { amount } = this.state;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={24} alignItems="center" justify="center" container ClassName={classes.grid}>
            <Grid item xs={12}>
              <div className={classes.block}>
                <Typography variant="h6" gutterBottom>ENGage Dashboard</Typography>
                  <Typography variant="body1">
                    Skills Matrix for Structural Engineers
                  </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                  Reinforced Concrete
                  </Typography>
                  <Slider
                    value={amount}
                    min={0}
                    max={5}
                    step={1}
                  />
                </div>
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