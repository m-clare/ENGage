import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SimpleTabs from './TabPanel';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import SummaryPanel from './SummaryPanel';
import chroma from "chroma-js";


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

const designColors = ["#B6002A", chroma("#B6002A").brighten(3)]
const analysisColors = ["#0E3B43", chroma("#0E3B43").brighten(3)]
const constructionColors = ["#357266", chroma("#357266").brighten(3)]

class Dashboard extends Component {

  render() {
    const { classes } = this.props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={1} alignItems="flex-start" justify="center" container className={classes.grid}>
            <Grid item xs={12} lg={12} md={12}>
              <Paper className={classes.paper}>
                <Grid container justify="center">
                  <Grid spacing={3} alignItems="flex-start" justify="center" container className={classes.grid}>
                    <Grid item xs={12}>
                      <Typography variant="h4" gutterBottom>ENGage Dashboard</Typography>
                        <Typography variant="h5">
                          Skills Matrix and Experience Tracking for Engineers
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                    <SimpleExpansionPanel 
                      style={{width: "100%"}}
                      inputsuggestions={designSuggestions} 
                      title="Design"
                      slidercolors={designColors}/>
                    <SimpleExpansionPanel
                      style={{width: "100%"}} 
                      inputsuggestions={analysisSuggestions} 
                      title="Analysis"
                      slidercolors={analysisColors}/>
                    <SimpleExpansionPanel 
                      style={{width: "100%"}}
                      inputsuggestions={constructionSuggestions}
                      title="Construction"
                      slidercolors={constructionColors}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <SummaryPanel />
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