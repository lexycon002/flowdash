import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DeviceType = ({ data = [] }) => {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [{
      data: data.map(d => d.value),
      backgroundColor: [ 
        '#00c9ff',
        '#ff7eb9',
        '#fcd000'
      ],
      hoverOffset: 10,
      borderWidth: 0,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#fff' }
      },
      tooltip: {
        callbacks: {
          label: ctx => {
            const label = ctx.label || '';
            const value = ctx.parsed !== undefined ? ctx.parsed : '';
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };

  return (
        <Pie data={chartData} options={options}/>
  );
};

export default DeviceType;
