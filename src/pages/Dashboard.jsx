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
    <div className="dashboard-container">
      
      <div className="dashboard-wrap">
        <h3>Dashboard</h3>
         <div className="border-right"></div>
         <div className="dashboard-text">
              <span className='dashboard-icon'> <IoIosHome /> </span>
              <p>Analysis</p>
         </div>
      </div>
      <div className="button-group">
        <div className="icon-dropdown-wrapper" ref={dropdownRef}>
          <button className="dashboard-btn">
            Settings
          </button>
          <button onClick={handleDropDownToggle} className="dashboard-icon-btn">
              <IoMdArrowDropdown size={25}/>
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