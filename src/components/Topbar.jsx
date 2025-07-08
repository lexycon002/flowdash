import React, { useState } from 'react'
import { IoMdMenu, IoIosNotificationsOutline  } from "react-icons/io";
import { IoAppsOutline,IoCartOutline, IoSearchOutline, IoCheckmarkDoneOutline   } from "react-icons/io5";
import myImg from "../assets/myImage.png";
import "./topbar.css";
import Catalan from "../assets/catalan.png";
import Canada from "../assets/canada.png";
import German from "../assets/German.png";
import Hindi from "../assets/hindi.png";
import Spanish from "../assets/spanish.png";
import Belize from "../assets/belize.png";
import Coloumbia from "../assets/colombia.png";
import Georgian from "../assets/georgian.png";


function Topbar() {
    const countryFlag = [
        { countryName: "Austria", flag: Catalan },
        { countryName: "Germany", flag: German },
        { countryName: "Cannada", flag: Canada },
        { countryName: "Hindi", flag: Hindi },
        { countryName: "Spanish", flag: Spanish },
        { countryName: "Belize", flag: Belize },
        { countryName: "Coloumbia", flag: Coloumbia },
        { countryName: "Georgian", flag: Georgian },
    ];
    const [selectedFlag, setSelectedFlag] = useState(countryFlag[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleFlagClick = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleSelectFlag = (flag) => {
        setSelectedFlag(flag);
        setDropdownOpen(false);
    };

  return (
    <div className="topbar-container">
        <div className="topbar-wrapper">
            <div className="topbar-icon-toggle">
                <IoMdMenu/>
            </div>
            <div className="topbar-input-search">
                <input type="text" placeholder='Search' />
                <span><IoSearchOutline /></span>
            </div>
            <div className="topbar-country" style={{ position: 'relative' }}>
                    <img
                        src={selectedFlag.flag}
                        alt={selectedFlag.countryName}
                        className="selected-flag"
                        onClick={handleFlagClick}
                    />
                    {dropdownOpen && (
                        <div className="flag-dropdown">
                            {countryFlag.filter(flag => flag.countryName !== selectedFlag.countryName).map(flag => (
                                <div className="topbar-flag-name">
                                    <img
                                        key={flag.countryName}
                                        src={flag.flag}
                                        alt={flag.countryName}
                                        onClick={() => handleSelectFlag(flag)}
                                    />
                                    <p className="title">{flag.countryName}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            <div className="topbar-check">
                <IoCheckmarkDoneOutline />
            </div>
            <div className="topbar-social-menus">
                <IoAppsOutline/>
            </div>
            <div className="topbar-notification">
                <IoIosNotificationsOutline />
            </div>
            <div className="topbar-cart">
                <IoCartOutline />
            </div>
            <div className="topbar-profile">
                <img src={myImg} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default Topbar