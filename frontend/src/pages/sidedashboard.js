import React, { useState } from 'react';

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
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-64 mt-14 h-screen bg-blue-200 text-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-semibold">ADMIN DASHBOARD</h2>
        <div className="mt-6 relative">
          <button
            className="w-full px-4 py-2 bg-blue-500 text-left rounded hover:bg-blue-600 focus:outline-none"
            onClick={toggleDropdown}
          >
            Students
          </button>
          {isDropdownOpen && (
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
      </div>
    </div>
  );
};

export default Sidedash;
