import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip);

function CustomSemiCircle({ percent = 78, colorStart = "#fcd000", colorEnd = "#ff007f" }) {
  // percent: 0-100
  const value = Math.max(0, Math.min(percent, 100));
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [
          // Gradient is not natively supported, so use colorStart for now
          colorStart,
          "#2c2f4a"
        ],
        borderWidth: 0,
        cutout: "70%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  const options = {
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };
  return (
    <div style={{ position: "relative", width: 140, height: 80 }}>
      <Doughnut data={data} options={options} width={140} height={80} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -30%)",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 24,
        pointerEvents: "none",
      }}>
        {value}%
      </div>
    </div>
  );
}

export default CustomSemiCircle;
