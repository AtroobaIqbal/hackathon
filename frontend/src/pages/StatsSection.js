import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidedash from './sidedashboard';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  { id: 1, name: 'TOTAL STUDENTS', value: '1000+', icon: 'fas fa-users' },
  { id: 2, name: 'NEW STUDENTS', value: '350+', icon: 'fas fa-user-plus' },
  { id: 3, name: 'COURSES', value: '50+', icon: 'fas fa-book' },
];

const chartData = {
  labels: ['Loss', 'Up'],
  datasets: [
    {
      label: 'Analytics',
      data: [20, 80], // Example data
      backgroundColor: '#4B9CE2',
      borderColor: '#007BFF',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
        },
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value + '%'; // Format y-axis values as percentages
        },
      },
    },
  },
};

const Stats = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Sidedash/>
      <div className="mx-auto px-6 lg:px-8 max-w-1500">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center gap-y-4 p-6 border rounded-lg shadow-lg bg-blue-100 max-w-xs">
              <div className="flex justify-center items-center text-4xl text-gray-600 mb-4">
                <i className={stat.icon}></i>
              </div>
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
          {/* Analytic Chart Card */}
          <div className="flex flex-col items-center gap-y-4 p-6 border rounded-lg shadow-lg bg-blue-100 max-w-xs">
            <div className="flex justify-center items-center text-4xl text-gray-600 mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h2 className="text-base leading-7 text-gray-600">Analytics</h2>
            <div className="w-full h-64">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
