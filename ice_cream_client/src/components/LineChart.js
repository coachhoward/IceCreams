import React, { useEffect } from "react";
import Chart from "chart.js";

const LineChart = () => {
    const prepareData = (data) => {
        const chartData = {
            labels: [],
            datasets: [
              {
                label: 'Pints Sold',
                data: [],
                fill: false,
                lineTension: 0,
    
                backgroundColor: "rgba(192, 77,77,.5)",
                borderColor: "rgba(192, 77,77,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(192, 77,77,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(192,77,77,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                spanGaps: false,
            },
            {
              label: 'Pints Made',
              data:[],
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              spanGaps: false,
            },
            {
              label: 'Profit Per Pint',
              data:[],
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              spanGaps: false,
            }
            ]
        }
    
        data.pints.forEach(pint => {
            chartData.labels.push(pint.month)
            chartData.datasets[0].data.push(pint.pints_sold)
            chartData.datasets[1].data.push(pint.pints_made);
            chartData.datasets[1].data.push(pint.profit_per_pint);
        })
        return chartData
    }

    const createChart = (data) => {
        const ctx = document.querySelector("#pints");
        const pintsChart = new Chart(ctx, {
          type: "line",
          //replace line with bar
          data: data,
        });
      };
    
  const getData = async () => {
      try {
        const response = await fetch("/ice_creams/1");
        const response_json = await response.json();
        const jData = await prepareData(response_json);
        createChart(jData);
      } catch (err) {
          console.error(err);
      }
    
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>🍦🍨IceCream Sales🍨🍦</h1>
      <canvas id="pints" width="300" height="100"></canvas>
    </>
  );
};

export default LineChart;