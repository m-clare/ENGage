import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactAutosuggest from './AutoSuggest';
import SummaryPanel from './SummaryPanel';
import Grid from '@material-ui/core/Grid';


function TabPanel(props) {
  const { children, activetab, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={activetab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  activetab: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const styles = theme => ({
    root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // 'max-height': '800px',
    'overflow': 'hidden'
  },
});

const fieldSuggestions = ['test1', 'test2', 'test3']

class SimpleTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }

  handleChange = (event, value)  => {
    this.setState({activeTab: value});  
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={activeTab} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Design" {...a11yProps(0)} />
            <Tab label="Analysis" {...a11yProps(1)} />
            <Tab label="Construction" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Grid item xs={12} md={8}>
          <TabPanel activetab={activeTab} index={0} >
            <ReactAutosuggest style={{'width':'100%'}}/>
          </TabPanel>
          <TabPanel activetab={activeTab} index={1}>
            <ReactAutosuggest style={{'width':'100%'}}/>
          </TabPanel>
          <TabPanel activetab={activeTab} index={2}>
            <ReactAutosuggest style={{'width':'100%'}}/>
          </TabPanel>
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryPanel />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs)