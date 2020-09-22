import React, {useEffect } from 'react';
import Chart from 'chart.js'

const BarChart = () => {
    const prepareData = (data) => {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Avg high temps',
                    data: []
                }
            ]
        }
    
        data.temperatures.forEach(temperature => {
            chartData.labels.push(temperature.month)
            chartData.datasets[0].data.push(temperature.average_high_f)
        })
        return chartData
    }

    const createChart = (data) => {
        const ctx = document.querySelector("#temperatures");
        const tempsChart = new Chart(ctx, {
          type: "line",
          data: data,
        });
      };

   const getData = () => {
        fetch('/locations/1')
          .then(response => response.json())
          .then((jData) => prepareData(jData))
          .then((data) => createChart(data))          
          .catch(err => console.log(err))
      }
      
      useEffect(() => {
          getData();
      }, []);


	return (
	  <>
	    <h1>Temperatures</h1>
	    <canvas id="temperatures" width="300" height="100"></canvas>
	  </>
	)
}

export default BarChart