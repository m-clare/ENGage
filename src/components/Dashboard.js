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

const designSuggestions = [{value: 'concrete-reinforced-beams', label: 'concrete-reinforced-beams'}, 
                           {value: 'concrete-reinforced-columns', label: 'concrete-reinforced-columns'}, 
                           {value: 'composite-slab-on-deck', label: 'composite-slab-on-deck'}, 
                           {value: 'steel-connection-detailing', label: 'steel-connection-detailing'}, 
                           {value: 'concrete-connection-detailing', label: 'concrete-connection-detailing'}, 
                           {value: 'concrete-prestressed-beams', label: 'concrete-prestressed-beams'}, 
                           {value: 'concrete-prestressed-slabs', label: 'concrete-prestressed-slabs'}, 
                           {value: 'concrete-strut-and-tie', label: 'concrete-strut-and-tie'}, 
                           {value: 'concrete-shear-walls', label: 'concrete-shear-walls'}, 
                           {value: 'steel-baseplates', label: 'steel-baseplates'}, 
                           {value: 'steel-gusset-plates', label: 'steel-gusset-plates'}, 
                           {value: 'steel-moment-frames', label: 'steel-moment-frames'}, 
                           {value: 'steel-braced-frames', label: 'steel-braced-frames'}, 
                           {value: 'steel-seismic-detailing', label: 'steel-seismic-detailing'}, 
                           {value: 'concrete-seismic-detailing', label: 'concrete-seismic-detailing'}, 
                           {value: 'mass-timber', label: 'mass-timber'}, 
                           {value: 'CLT-timber', label: 'CLT-timber'}, 
                           {value: 'timber-concrete-composite', label: 'timber-concrete-composite'}, 
                           {value: 'masonry-walls', label: 'masonry-walls'}, 
                           {value: 'concrete-reinforced-footings', label: 'concrete-reinforced-footings'}, 
                           {value: 'concrete-slab-on-grade', label: 'concrete-slab-on-grade'}, 
                           {value: 'concrete-spread-footings', label: 'concrete-spread-footings'},
                           {value: 'pile-cap-design', label: 'pile-cap-design'}, 
                           {value: 'concrete-raft-foundations', label: 'concrete-raft-foundations'}]

const analysisSuggestions = [{value: 'linear-elastic-analysis', label: 'linear-elastic-analysis'}, 
                             {value: 'nonlinear-geometric-analysis', label: 'nonlinear-geometric-analysis'},
                             {value: 'nonlinear-material-analysis', label: 'nonlinear-material-analysis'}, 
                             {value: 'nonlinear-time-history-analysis', label: 'nonlinear-time-history-analysis'},
                             {value: 'performance-based-design-seismic', label: 'performance-based-design-seismic'},
                             {value: 'performance-based-design-wind', label: 'performance-based-design-wind'},
                             {value: 'ANSYS', label: 'ANSYS'},
                             {value: 'ABAQUS', label: 'ABAQUS'},
                             {value: 'SOFiSTiK', label: 'SOFiSTiK'},
                             {value: 'RAM Steel', label: 'RAM Steel'},
                             {value: 'Perform3D', label: 'Perform3D'},
                             {value: 'ADAPT PT', label: 'ADAPT PT'},
                             {value: 'LUSAS', label: 'LUSAS'},
                             {value: 'SAP2000', label: 'SAP2000'},
                             {value: 'ETABS', label: 'ETABS'},
                             {value: 'LS-DYNA', label: 'LS-DYNA'}]

const constructionSuggestions = [{value: 'pt-shop-review', label: 'pt-shop-review'}, 
                                 {value: 'rc-shop-review', label: 'rc-shop-review'},
                                 {value: 'rc-special-inspection', label: 'rc-special-inspection'},
                                 {value: 'steel-special-inspection', label: 'steel-special-inspection'},
                                 {value: 'pt-special-inspection', label: 'pt-special-inspection'},
                                 {value: 'steel-connection-shop-review', label: 'steel-connection-shop-review'},
                                 {value: 'RFI-response', label: 'RFI-response'},
                                 {value: 'structural-sketch-response', label: 'structural-sketch-response'}]

const designColors = ["#283593", "#C5CAF9"]
const analysisColors = ["#00838F", "#B2EBF2"]
const constructionColors = ["#FF8F00", "#FFECB3"]



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