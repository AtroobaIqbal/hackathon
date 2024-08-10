import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidedash from './sidedashboard';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];

const Work = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

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
    <div className="bg-black w-full min-h-screen relative">
      <nav className="bg-blue-900 p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4 "  style={{ marginLeft: '12em' }}>
            <Link to="/home" className="navbar-link text-white hover:text-gray-300">Home</Link>
            <Link to="" className="navbar-link text-white hover:text-gray-300">About</Link>
            <Link to="" className="navbar-link text-white hover:text-gray-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white hover:bg-gray-700 p-2 rounded-md">
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-900`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ul className="list-none p-0 m-0">
              <li><Link to="/home" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Home</Link></li>
              <li><Link to="" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">About</Link></li>
              <li><Link to="/" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar - only visible on desktop */}
      <div className="hidden lg:block">
        <Sidedash />
      </div>

      {/* Main content */}
      <div className="pt-20 pb-24 relative lg:ml-10">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 z-10 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 ml-20 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="text-xl no-underline hover:text-blue-900">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {Work.map((item) => (
                <div key={item.name} className="flex flex-col-reverse text-center">
                  <dt className="text-base leading-7 text-gray-300">{item.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mb-6 px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center gap-y-4 p-6 border rounded-lg shadow-lg bg-violet-200 max-w-xs">
              <div className="flex justify-center items-center text-4xl text-gray-600 mb-4">
                <i className={stat.icon}></i>
              </div>
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-gray-900 mt-2 sm:text-5xl">
                {stat.value}
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
