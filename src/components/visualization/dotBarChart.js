import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import * as d3 from 'd3';

class DotBarChart extends Component {

	render() {

    const { dotSize, data } = this.props
    const data2 = data.map(d => d.sliderValue)
    const colorData = data.map(d => d.color)
    const width = data.length * 2 * dotSize + (data.length) * dotSize;
    const height = 5 * 2 * dotSize + 5 * dotSize;

    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width])

    const y = d3.scaleLinear()
      .domain([0, 6])
      .range([height, 0])

    const newData = data2.map(function(el) {
        return d3.range(el);
      })

    if(!data)
    {
      return null;
    }
    return (
      <svg x="50%" overflow="visible">
        <g
          transform={`translate(${-width*0.5}, ${-1.5*dotSize})`}
          >
          {newData.map((column, index) => ( 
              <g
                transform={`translate(${x(index)}, 0)`}
                key={index}
              >
                {column.map((circleNumber) => (
                  <circle
                    cx={0}
                    cy={y(circleNumber)}
                    r={dotSize}
                    key={circleNumber}
                    fill={colorData[index]}
                  />
                  ))
                }
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