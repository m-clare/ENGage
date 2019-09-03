import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

class BarChart extends React.Component {
  state = {
    widthScale: d3
      .scaleBand()
      .padding(0.1)
      // .domain(d3.range(0, this.props.data.length))
      .domain(this.props.data.map((d) => d.key))
      .range([0, this.props.width]),

  };

  color = chroma.scale(["yellow", "navy"]).mode("hsl");

  static getDerivedStateFromProps(nextProps, prevState) {
    let { widthScale, heightScale } = prevState;

    widthScale.domain(d3.range(0, nextProps.data.length));

    prevState = { ...prevState, widthScale };
    return prevState;
  }

  render() {
    const { x, y, data, width, height, highlightBar, highlightedBar } = this.props,
      { widthScale } = this.state;

    const heightScale = d3
        .scaleLinear()
        .domain([0, 5])
        .range([0, this.props.height])

    return (
      <g
        transform={`translate(${x}, ${y})`}
        onMouseOut={() => highlightBar(null)}
      >
        {data.map((d, i) => (
          <rect
            x={widthScale(i)}
            y={height - heightScale(d.sliderValue)}
            width={widthScale.bandwidth()}
            height={heightScale(d.sliderValue)}
            style={{
              fill: i === highlightedBar ? this.color(d.sliderValue) : this.color(1 - d.sliderValue)
            }}
            onMouseOver={() => highlightBar(i)}
            key={i}
          />
        ))}
      </g>
    );
  }
}

export default BarChart;
