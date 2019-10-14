import React, { Component } from 'react';
import * as d3 from 'd3';

class ConcentricRingChart extends Component {

    render() {

    const dataset = {
      apples: [53245, 28479, 19697, 24037, 40245],
      oranges: [53245, 28479, 19697, 24037, 40245],
      lemons: [53245, 28479, 19697, 24037, 40245],
      pears: [53245, 28479, 19697, 24037, 40245],
      pineapples: [53245, 28479, 19697, 24037, 40245],
    };

    const width = 460,
        height = 300,
        cwidth = 25;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
        .sort(null);

    const arc = d3.arc();

    const gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g");

    const path = gs.selectAll("path")
            .data(function(d) { return pie(d); })
            .enter().append("path")
            .attr("fill", function(d, i) { return color(i); })
            .attr("d", function(d, i, j) { return arc.innerRadius(10+cwidth*j).outerRadius(cwidth*(j+1))(d); });

    return (
        <svg width={width} height={height}>
        <g
            transform={`translate(${width / 2}, ${height / 2}`}
        >
        </g>
        </svg>
        )
    }
}

export default ConcentricRingChart

