import React, { useState } from 'react';
import { FaAngleDown, FaCalendarAlt, FaPersonBooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const studentList = [
  'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'David Lee', 'Emily Davis',
  'Frank Miller', 'Grace Wilson', 'Hannah Moore', 'Ian Thompson', 'Jasmine Harris',
  'Kevin Lewis', 'Laura Clark', 'Michael Walker', 'Nancy Martinez', 'Olivia White',
  'Paul Robinson', 'Quincy Hall', 'Rachel Adams', 'Sarah Scott', 'Thomas Baker',
  'Ursula Cooper', 'Victor Evans', 'Wendy Green', 'Xander King', 'Yvonne Carter',
  'Zachary Mitchell', 'Ava Johnson', 'Brian Taylor', 'Catherine Anderson', 'Daniel Thomas',
  'Ella Wilson', 'Fiona Young'
];

const Sidedash = () => {
  const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false);

  const toggleStudentDropdown = () => {
    setStudentDropdownOpen(!isStudentDropdownOpen);
  };

  return (
    <div className="fixed text-blue-600 top-0 left-0 w-64 h-screen bg-blue-800 shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-semibold">ADMIN DASHBOARD</h2>
        <div className="mt-6">
          {/* Students Dropdown Button */}
          <div className="relative mb-4">
            <button
              className="flex items-center text-white w-full h-10 px-4 bg-blue-500 text-left rounded hover:bg-blue-600 focus:outline-none"
              onClick={toggleStudentDropdown}
            >
              <span className="mr-2">Students</span>
              <FaAngleDown />
            </button>
            {isStudentDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto w-full">
                <ul className="list-none p-0 m-0">
                  {studentList.map((student, index) => (
                    <li key={index} className="hover:bg-gray-200">
                      <a href="./StatsSection.js" className="block px-4 py-2">
                        {student}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Calendar Button */}
          <div className="relative">
            <Link
              to="/calendar"
              className="flex no-underline text-white items-center w-full h-10 px-4 bg-blue-500 text-left rounded hover:bg-blue-600 focus:outline-none"
            >
              <span className="mr-2">Calendar</span>
              <FaCalendarAlt />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h4>OUR TEAM</h4>
        <div className="relative mt-6">
            <Link
              to=""
              className="flex no-underline w-30 text-white items-center w-full h-10 px-4 bg-blue-500 text-left rounded hover:bg-blue-600 focus:outline-none"
            >
              <span className="mr-2">PROFILE</span>
              <FaPersonBooth />
            </Link>
            <Link
              to=""
              className="flex no-underline w-30 text-white items-center w-full h-10 px-4 bg-blue-500 text-left rounded hover:bg-blue-600 focus:outline-none"
            >
              <span className="mr-2">PROFILE 1</span>
              <FaPersonBooth />
            </Link>
            <Link
              to=""
              className="flex no-underline w-30 text-white items-center w-full h-10 px-4 bg-blue-500 text-left rounded hover:bg-blue-600 focus:outline-none"
            >
              <span className="mr-2">PROFILE 2</span>
              <FaPersonBooth />
            </Link>
          </div>

      </div>
    </div>

    
  );
};

export default Sidedash;
