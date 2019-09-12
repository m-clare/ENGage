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

const designSuggestions = [{name: 'concrete-reinforced-beams'}, 
                           {name: 'concrete-reinforced-columns'}, 
                           {name: 'composite-slab-on-deck'}, 
                           {name: 'steel-connection-detailing'}, 
                           {name: 'concrete-connection-detailing'}, 
                           {name: 'concrete-prestressed-beams'}, 
                           {name: 'concrete-prestressed-slabs'}, 
                           {name: 'concrete-strut-and-tie'}, 
                           {name: 'concrete-shear-walls'}, 
                           {name: 'steel-baseplates'}, 
                           {name: 'steel-gusset-plates'}, 
                           {name: 'steel-moment-frames'}, 
                           {name: 'steel-braced-frames'}, 
                           {name: 'steel-seismic-detailing'}, 
                           {name: 'concrete-seismic-detailing'}, 
                           {name: 'mass-timber'}, 
                           {name: 'CLT-timber'}, 
                           {name: 'timber-concrete-composite'}, 
                           {name: 'masonry-walls'}, 
                           {name: 'concrete-reinforced-footings'}, 
                           {name: 'concrete-slab-on-grade'}, 
                           {name: 'concrete-spread-footings'},
                           {name: 'pile-cap-design'}, 
                           {name: 'concrete-raft-foundations'}]

const analysisSuggestions = [{name: 'linear-elastic-analysis'}, 
                             {name: 'nonlinear-geometric-analysis'},
                             {name: 'nonlinear-material-analysis'}, 
                             {name: 'nonlinear-time-history-analysis'},
                             {name: 'performance-based-design-seismic'},
                             {name: 'performance-based-design-wind'},
                             {name: 'ANSYS'},
                             {name: 'ABAQUS'},
                             {name: 'SOFiSTiK'},
                             {name: 'RAM Steel'},
                             {name: 'Perform3D'},
                             {name: 'ADAPT PT'},
                             {name: 'LUSAS'},
                             {name: 'SAP2000'},
                             {name: 'ETABS'},
                             {name: 'LS-DYNA'}]

const constructionSuggestions = [{name: 'pt-shop-review'}, 
                                 {name: 'rc-shop-review'},
                                 {name: 'rc-special-inspection'},
                                 {name: 'steel-special-inspection'},
                                 {name: 'pt-special-inspection'},
                                 {name: 'steel-connection-shop-review'},
                                 {name: 'RFI-response'},
                                 {name: 'structural-sketch-response'}]

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
        <Grid container justify="center">
          <Grid spacing={0} alignItems="flex-start" justify="center" container className={classes.grid}>
            <Grid item xs={12} md={8}>
              <AppBar position="static" style={{boxShadow: "bottom"}}>
                <Grid item xs={12}>
                  <Tabs value={activeTab} onChange={this.handleChange}>
                    <Tab label="Design" {...a11yProps(0)} />
                    <Tab label="Analysis" {...a11yProps(1)} />
                    <Tab label="Construction" {...a11yProps(2)} />
                  </Tabs>
                </Grid>
              </AppBar>
              <TabPanel activetab={activeTab} index={0} >
                <ReactAutosuggest inputsuggestions={designSuggestions} style={{'width':'100%'}}/>
              </TabPanel>
              <TabPanel activetab={activeTab} index={1}>
                <ReactAutosuggest inputsuggestions={analysisSuggestions} style={{'width':'100%'}}/>
              </TabPanel>
              <TabPanel activetab={activeTab} index={2}>
                <ReactAutosuggest inputsuggestions={constructionSuggestions} style={{'width':'100%'}}/>
              </TabPanel>
            </Grid>
            <Grid item xs={12} md={4}>
              <AppBar position="static" style={{boxShadow: "bottom"}}>
                <Tabs value={0} centered>
                <Tab label="Summary" disableFocusRipple={true} disableRipple={true} {...a11yProps(0)} />
                </Tabs>
              </AppBar>
              <SummaryPanel />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs)