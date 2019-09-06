import React from 'react';
import { PropTypes } from 'prop-types';
import * as d3 from 'd3';

class DotBarChart extends React.Component {

	render() {

    const { dotSize } = this.props
    const data = [5, 3, 2, 4, 5, 6, 2, 1]
		const width = data.length * 2 * dotSize + (data.length) * dotSize;
    const height = d3.max(data) * 2 * dotSize + (data.length) * dotSize;

    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width])

    const y = d3.scaleLinear()
      .domain([0, d3.max(data) + 1])
      .range([height, 0])



      return (
        <svg x="50%" overflow="visible">
          <g
            transform={`translate(${-width*0.5}, 0)`}
            >
            {data.map((d, i) => ( 
                <g
                  transform={`translate(${x(i)}, 0)`}
                  key={i}
                >
                column = d3.range(d)
                column.map((d) => (
                  <circle
                    cx={0}
                    cy={y(d)}
                    r={dotSize}
                  />
                  {console.log(d3.range(d))}
                  ))
                </g>
              )
            )
          }
          </g>
        </svg>
        )
	}
}

DotBarChart.propTypes = {
  dotSize: PropTypes.number
}

export default DotBarChart