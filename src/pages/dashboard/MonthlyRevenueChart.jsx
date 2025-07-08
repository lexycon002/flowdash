// MonthlyRevenueChart.jsx
import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MonthlyRevenueChart = () => {
  const canvasRef = useRef(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [12, 40, 35, 50, 22, 16, 19, 32, 15,70],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
        
            return "#00fba8";
          }
          const { top, bottom } = chartArea;
          const gradient = ctx.createLinearGradient(0, top, 0, bottom);
          gradient.addColorStop(0, "#00fba8");
          gradient.addColorStop(1, "#007bff");
          return gradient;
        },
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#2c2f4a",
        },
      },
    },
  };

  return (
    <div style={{ height: "250px", background: "#0d0f2b", borderRadius: "10px", padding: "20px" }}>
      <h4 style={{ color: "#fff", marginBottom: "10px", textAlign: "center" }}>
        Monthly Revenue
      </h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlyRevenueChart;
