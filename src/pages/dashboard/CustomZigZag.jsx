import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const CustomZigZag = () => {
  const data = {
    labels: ['', '', '', '', '', '', '', ''], // Optional x-axis labels
    datasets: [
      {
        label: 'Total Users',
        data: [10, 25, 15, 30, 20, 50, 35, 25], // You can customize this
        fill: true,
        borderColor: '#00fba8',
        backgroundColor: 'rgba(0, 251, 168, 0.1)',
        tension: 0.4, // This gives the smooth curve
        pointRadius: 0, // Hide points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Optional: disable tooltip
      },
    },
  };

  return (
    <div style={{ width: '90%', height: '120px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomZigZag;
