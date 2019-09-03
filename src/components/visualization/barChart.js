import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

class BarChart extends React.Component {
  state = {
    widthScale: d3
      .scaleBand()
      .domain(this.props.data.map((d) => d.key))
      .range([0, this.props.width]),

    heightScale: d3
      .scaleLinear()
      .domain([0, d3.max(this.props.data.map((d) => d.sliderValue))])
      .range([0, this.props.height])
  };

  color = chroma.scale(["yellow", "navy"]).mode("hsl");

  static getDerivedStateFromProps(nextProps, prevState) {
    let { widthScale, heightScale } = prevState;

    widthScale.domain(d3.range(0, nextProps.data.length));
    heightScale.domain([0, d3.max(nextProps.data)]);

    prevState = { ...prevState, widthScale, heightScale };
    return prevState;
  }

  render() {
    const { x, y, data, width, height, heightScale, highlightBar, highlightedBar } = this.props,
      { widthScale } = this.state;

      console.log(typeof(d3.max(data.map((d) => d.sliderValue))))
      console.log(typeof(this.props.height))

    return (
      <g
        transform={`translate(${x}, ${y})`}
        onMouseOut={() => highlightBar(null)}
      >
        {data.map((d, i) => (
          <rect
            x={widthScale(i)}
            y={height - 200}
            width={widthScale.bandwidth()}
            height={200}
            style={{
              fill: i === highlightedBar ? this.color(d) : this.color(1 - d)
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
