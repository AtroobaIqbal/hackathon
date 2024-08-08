import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidedash from './sidedashboard';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const Work = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  return (
    <div className="bg-black w-full ">
      <nav className="bg-blue-900 mb-20 top-0 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="" className="navbar-link">About</Link> 
            <Link to="" className="navbar-link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white hover:bg-gray-700 p-2 rounded-md">
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ul className="list-none p-0 m-0">
              <li><Link to="/" className="block px-4 py-2 text-white bg-gray-700 rounded">Home</Link></li>
              <li><Link to="" className="block px-4 py-2 text-white bg-gray-700 rounded">About</Link></li>
              <li><Link to="/" className="block px-4 py-2 text-white bg-gray-700 rounded">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <Sidedash />

      {/* {page} */}
      <div className="absolute relative isolate fixed overflow-hidden bg-gray-900 mb-20 ml-4 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 ml-20 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((links) => (
              <a key={links.name} href={links.href} className="text-xl no-underline hover:text-blue-900" > 
                {links.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 ml-20 sm:grid-cols-2 lg:grid-cols-4">
            {Work.map((Work) => (
              <div key={Work.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{Work.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{Work.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    
    <div className="mx-auto mb-6 px-6 lg:px-8 max-w-1500">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stats) => (
            <div key={stats.id} className="flex flex-col items-center gap-y-4 p-6 border rounded-lg shadow-lg bg-violet-200 max-w-xs">
              <div className="flex justify-center items-center text-4xl text-gray-600 mb-4">
                <i className={stats.icon}></i>
              </div>
              <dt className="text-base leading-7 text-gray-600">{stats.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 mt-20 sm:text-5xl">
                {stats.value}
              </dd>
            </div>
          ))}
          {/* Analytic Chart Card */}
          <div className="flex flex-col items-center gap-y-4 p-6 border rounded-lg shadow-lg bg-blue-200 max-w-xs">
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
