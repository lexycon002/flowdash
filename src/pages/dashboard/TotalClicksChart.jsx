import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const TotalClicksChart = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", ""], 
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
        borderRadius: 4, // Slightly reduced radius for tighter bars
        
        // --- CONTROLS SPACING ---
        categoryPercentage: 1.0, // 1.0 = Use full width of the category
        barPercentage: 0.65,     // 0.85 = Bar takes 85% of space (small gap)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to stretch to container height
    scales: {
      x: {
        display: false, 
        grid: { display: false },
      },
      y: {
        display: false, 
        grid: { display: false },
        beginAtZero: true, // Ensures bars start from bottom
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

  // Set height/width to 100% to fill the parent card in Analysis.jsx
  return (
    <div style={{ height: '100%', width: '100%', minHeight: '100px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalClicksChart;