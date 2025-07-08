import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Filler);

const TotalAccountsChart = () => {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [5, 15, 10, 30, 15, 45, 20],
        borderColor: "#ffcc00",
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 120);
          gradient.addColorStop(0, "rgba(255, 204, 0, 0.4)");
          gradient.addColorStop(1, "rgba(255, 204, 0, 0.05)");
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0, // Make points visible for tooltip
        pointBackgroundColor: '#ffcc00',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: { display: false }, y: { display: false } },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        intersect: false,
        mode: 'index',
        callbacks: {
          label: function(context) {
            // Show the value on hover
            return context.parsed.y !== undefined ? context.parsed.y : '';
          }
        },
        external: function(context) {
          // Force chart to redraw so afterDraw runs on tooltip move
          context.chart.draw();
        }
      },
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
        ctx.strokeStyle = '#ffcc00';
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  // Add shadow effect using a custom plugin
  const shadowPlugin = {
    id: 'shadowLine',
    beforeDatasetsDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.save();
      ctx.shadowColor = 'rgba(255, 204, 0, 0.5)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 6;
    },
    afterDatasetsDraw: (chart) => {
      chart.ctx.restore();
    },
  };

  return <Line data={data} options={options} height={120} plugins={[shadowPlugin, crosshairPlugin]} />;
};

export default TotalAccountsChart;
