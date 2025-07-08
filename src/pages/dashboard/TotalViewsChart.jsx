import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const TotalViewsChart = () => {
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        data: [5, 25, 10, 45, 15, 65],
        borderColor: "#ff00ff",
        backgroundColor: "#fff",
        borderWidth: 2,
        tension: 0,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#ff00ff",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        intersect: false,
        mode: 'index',
        external: function(context) {
          context.chart.draw();
        }
      }
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    }
  };

  // Custom plugin to draw a dotted vertical line (crosshair) on hover
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
        ctx.strokeStyle = '#ff00ff';
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  return <Line data={data} options={options} height={120} plugins={[crosshairPlugin]} />;
};

export default TotalViewsChart;
