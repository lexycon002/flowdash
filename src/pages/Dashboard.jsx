import React, { useState, useRef, useEffect } from 'react'
import { IoIosHome, IoMdArrowDropdown } from "react-icons/io";
import Analysis from './dashboard/Analysis';

function Dashboard() {
  const [isdroppedDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropDownToggle = () => {
    setIsDropDown((prev) => !prev);
  };

  useEffect(() => {
    if (!isdroppedDown) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isdroppedDown]);

  return (
    <>
    <div className="mx-6 mr-6 mt-8 flex justify-between items-center pb-6 border-b border-gray-700">
      
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
         <div className="h-6 border-l border-gray-600"></div>
         <div className="flex items-center gap-2">
              <span className='text-lg text-indigo-500'> <IoIosHome /> </span>
              <p className="text-base text-gray-400">Analysis</p>
         </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex items-center" ref={dropdownRef}>
          <button className="dashboard-btn">
            Settings
          </button>
          <button onClick={handleDropDownToggle} className="dashboard-icon-btn">
              <IoMdArrowDropdown size={20}/>
          </button>
          {isdroppedDown && (
            <div className="drop-menu">
              <ul>
                <li>E-commerce</li>
                <li>Finance</li>
                <li>Forms</li>
                <li>Cards</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    <Analysis />
    </>
  )
}

export default Dashboard