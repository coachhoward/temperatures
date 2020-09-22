import React, {useEffect } from 'react';
import Chart from 'chart.js'

const BarChart = () => {
	return (
	  <>
	    <h1>Temperatures</h1>
	    <canvas id="temperatures" width="300" height="100"></canvas>
	  </>
	)
}

export default BarChart