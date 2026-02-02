import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const VisitorsGrowthChart = () => {
  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Visitors',
        data: [10, 30, 15, 35, 25, 60, 30],
        borderColor: '#99ff33',
        backgroundColor: 'rgba(0,0,0,0)',
        tension: 0, // CHANGED: Set to 0 for sharp, pointed lines
        pointBackgroundColor: '#fff',
        pointBorderColor: '#99ff33',
        pointBorderWidth: 3,
        pointRadius: 5,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  // Plugin to draw the dotted crosshair line
  const crosshairPlugin = {
    id: 'customCrosshair',
    afterDraw: (chart) => {
      if (chart.tooltip?._active && chart.tooltip._active.length) {
        const ctx = chart.ctx;
        ctx.save();
        const activePoint = chart.tooltip._active[0];
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.beginPath();
        ctx.setLineDash([6, 6]);
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#66ff00';
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  return (
    <div className="h-[150px] w-full"> {/* Increased height slightly for better visibility */}
        <Line data={data} options={options} plugins={[crosshairPlugin]} />
    </div>
  );
};

export default VisitorsGrowthChart;