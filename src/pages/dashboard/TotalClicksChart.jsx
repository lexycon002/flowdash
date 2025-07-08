import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const TotalClicksChart = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", ""], // 10 labels for 10 data points
    datasets: [
      {
        data: [2, 4, 6, 9, 13, 17, 20, 25, 40, 45],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#ff007f");
          gradient.addColorStop(1, "#a100ff");
          return gradient;
        },
        borderRadius: 6,
        categoryPercentage: 0.6, // Controls width of bar group (smaller = more space)
        barPercentage: 0.7,      // Controls width of each bar (smaller = more space)
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide x-axis numbers
        grid: { display: false },
        maxBarThickness: 30, // Prevent bars from getting too thin
      },
      y: {
        display: false, // Hide y-axis numbers
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: ctx => ctx.parsed.y
        }
      },
    },
  };

  return (
    <div style={{ height:100, width: 450 }}>
      <Bar data={data} options={{ ...options, responsive: true }} />
    </div>
  );
};

export default TotalClicksChart;
