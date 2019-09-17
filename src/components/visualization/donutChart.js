import React, { Component, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';

class Pie extends Component {

  render () {
  const { props } = this.props;

  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");

  useEffect(
    () => {
      const data = createPie(props.data);
      const prevData = createPie(cache.current);
      const group = d3.select(ref.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc");

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"));

      const arcTween = (d, i) => {
        const interpolator = d3.interpolate(prevData[i], d);

        return t => createArc(interpolator(t));
      };

      path
        .attr("class", "arc")
        .attr("fill", (d, i) => colors(i))
        .transition()
        .attrTween("d", arcTween);

      const text = groupWithUpdate
        .append("text")
        .merge(groupWithData.select("text"));

      text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("fill", "white")
        .style("font-size", 10)
        .transition()
        .attr("transform", d => `translate(${createArc.centroid(d)})`)
        .tween("text", (d, i, nodes) => {
          const interpolator = d3.interpolate(prevData[i], d);

          return t => d3.select(nodes[i]).text(format(interpolator(t).value));
        });

      cache.current = props.data;
    },
    [props.data]
  );

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
  );
};
}

export default Pie;

// const useStyles = makeStyles(theme => ({
//   root: {
//     height: '100%'
//   },
//   chartContainer: {
//     position: 'relative',
//     height: '250px',
//     padding: theme.spacing(3)
//   },
// }));

// const UsersByDevice = props => {
//   const { className } = props;

//   const classes = useStyles();
//   const theme = useTheme();

//   const data = {
//     datasets: [
//       {
//         data: [25, 25, 25, 25],
//         backgroundColor: [
//           "#B6002A",
//           "#0E3B43", 
//           "#357266", 
//           "#A3BBAD",
//         ],
//         borderWidth: 8,
//         borderColor: theme.palette.white,
//         hoverBorderColor: theme.palette.white
//       }
//     ],
//     labels: ['Schematic Design', 'Detailed Design', 'Construction Documents', 'Contract Administration']
//   };

//   const options = {
//     legend: {
//       display: false
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     animation: false,
//     cutoutPercentage: 80,
//     layout: { padding: 0 },
//     tooltips: {
//       enabled: true,
//       mode: 'index',
//       intersect: false,
//       borderWidth: 1,
//       borderColor: theme.palette.divider,
//       backgroundColor: theme.palette.white,
//       titleFontColor: theme.palette.text.primary,
//       bodyFontColor: theme.palette.text.secondary,
//       footerFontColor: theme.palette.text.secondary
//     }
//   };

//   return (
    
//     <div className={classes.chartContainer}>
//       <Doughnut
//         data={data}
//         options={options}
//       />
//     </div>
//   );
// };

// UsersByDevice.propTypes = {
//   className: PropTypes.string
// };

// export default UsersByDevice;