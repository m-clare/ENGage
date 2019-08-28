import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TabPanel from './TabPanel';


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

// const tabValues = 

class Dashboard extends Component {

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
                      <TabPanel />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      Summary Placeholder
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