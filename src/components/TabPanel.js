import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactAutosuggest from './AutoSuggest';
import Chart from 'react-google-charts';
import Grid from '@material-ui/core/Grid';
import TagsComp from './TagsComp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    'max-height': '800px',
    'overflow': 'hidden'
  },
}));

const fieldSuggestions = ['test1', 'test2', 'test3']
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Design" {...a11yProps(0)} />
          <Tab label="Analysis" {...a11yProps(1)} />
          <Tab label="Construction" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
          <TagsComp />
        </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{'height': '100px'}}>
        Bar plot Placeholder
        </div>
        <ReactAutosuggest style={{'width': '100%'}} fieldSuggestions={fieldSuggestions}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{'height': '100px'}}>
        Bar plot Placeholder
        </div>
        <ReactAutosuggest style={{'width': '100%'}} fieldSuggestions={fieldSuggestions}/>
      </TabPanel>
    </div>
  );
}