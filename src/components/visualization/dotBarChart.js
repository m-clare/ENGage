import React from 'react';
import * as d3 from 'd3';

class DotBarChart extends React.Component {
	render() {

		const {x, y, width, height } = this.props

    const data = [1, 5, 3]
    const numPerRow = 15;


    var array1 = [1, 2, 3, 4]
    let data = function(d) { return d3.range(d); };

    console.log(data);

    function setTest(d) { return d3.range(d); };
    // let test = function(d, i, j) {
    console.log(setTest(data))
    //   return ((i + d3.sum(data.slice(0, j))) % numPerRow + 1) * 15;
    // };
    // console.log(test);
    // // const test = data.map((d, i, j) => (i + d3.sum(d.slice(0,j)) % numPerRow + 1) * 15)

    // console.log(test)
    return null
	}
}

export default DotBarChart