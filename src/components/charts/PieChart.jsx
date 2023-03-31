import React, { useEffect } from 'react';
import { Chart, PieController, ArcElement, Legend, Tooltip } from 'chart.js';

Chart.register(PieController, ArcElement, Legend, Tooltip);

function PieChart() {
  const data = {
    labels: ['Retailer', 'Distributor', 'Warehouse', 'Manufacturer' ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [45, 25, 15, 10],
        backgroundColor: ['#FF7676', '#F6F49D', '#5DAE8B', '#466C95'],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 10,
              padding: 20,
              fullsixe: 'true'
            },
          },
        },
      },
    });
    chart.options.plugins.legend.position = 'top';
    chart.update();
  }, []);

  return <canvas id="myChart" width="400" height="400"></canvas>;
}

export default PieChart;
