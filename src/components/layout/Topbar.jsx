import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext';
import { IoMdMenu, IoIosNotificationsOutline } from "react-icons/io";
import { 
    IoAppsOutline, IoCartOutline, IoSearchOutline, IoCheckmarkDoneOutline, 
    IoSettingsOutline, IoChatbubblesSharp, IoCompassSharp, IoLogoYoutube, 
    IoLogoFacebook, IoLogoWhatsapp, IoBookSharp, IoDocumentTextSharp, 
    IoLogoGithub, IoLogoTiktok, IoMail, IoLogoSkype, IoLogoSlack, 
    IoLogoGoogle, IoLogoInstagram, IoMusicalNotes, IoLogoYahoo, 
    IoLogoFigma, IoLogoPaypal, IoImages, IoPlayCircleOutline, 
    IoLaptopOutline, IoPersonOutline, IoClose, IoTrashOutline, 
    IoEyeOutline, IoGridOutline, IoWalletOutline, IoCloudDownloadOutline,
    IoPowerOutline, IoEllipsisVertical,IoSunnyOutline, IoMoonOutline
} from "react-icons/io5";
import myImg from "../../assets/myImage.png"; 
import Catalan from "../../assets/catalan.png";
import Canada from "../../assets/canada.png";
import German from "../../assets/german.png";
import Hindi from "../../assets/hindi.png";
import Spanish from "../../assets/spanish.png";
import Belize from "../../assets/belize.png";
import Coloumbia from "../../assets/colombia.png";
import Georgian from "../../assets/georgian.png";

const ProductPlaceholder = ({color}) => (
    <div className={`w-12 h-10 rounded ${color} flex items-center justify-center text-xs text-white shadow-sm`}>Img</div>
);

function Topbar({ onToggleSidebar }) {
    const { theme, toggleTheme } = useTheme();
    // --- DATA ---
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

    const recentSearches = ["Angular Template", "Dashboard", "Admin Template", "Bootstrap 5 Admin", "Html eCommerce", "Sass", "laravel 9"];
    
    const tutorialsData = [
        { title: "Wordpress Tutorials", icon: IoPlayCircleOutline, color: "text-purple-500" },
        { title: "eCommerce Website Tutorials", icon: IoCartOutline, color: "text-orange-500" },
        { title: "Responsive Design", icon: IoLaptopOutline, color: "text-blue-500" },
    ];
    
    const membersData = [
        { name: "Andrew Stark", role: "Director", img: myImg },
        { name: "Snetro Jhonia", role: "Web Designer", img: myImg },
        { name: "Michle Clark", role: "Developer", img: myImg },
    ];

    const appsData = [
        { title: 'Marketing', desc: 'In publishing and graphic design...', icon: IoChatbubblesSharp, color: 'bg-pink-600' },
        { title: 'Website', desc: 'In publishing and graphic design...', icon: IoCompassSharp, color: 'bg-blue-600' },
        { title: 'Subscribers', desc: 'In publishing and graphic design...', icon: IoLogoYoutube, color: 'bg-red-600' },
        { title: 'Hubspot', desc: 'In publishing and graphic design...', icon: IoLogoFacebook, color: 'bg-blue-700' },
        { title: 'Templates', desc: 'In publishing and graphic design...', icon: IoLogoWhatsapp, color: 'bg-pink-600' },
        { title: 'Ebooks', desc: 'In publishing and graphic design...', icon: IoBookSharp, color: 'bg-blue-500' },
        { title: 'Sales', desc: 'In publishing and graphic design...', icon: IoDocumentTextSharp, color: 'bg-blue-600' },
        { title: 'Tools', desc: 'In publishing and graphic design...', icon: IoLogoGithub, color: 'bg-blue-800' },
        { title: 'Academy', desc: 'In publishing and graphic design...', icon: IoLogoTiktok, color: 'bg-teal-500' },
    ];

    const webAppsData = [
        { name: 'Gmail', icon: IoMail, color: 'text-red-500' },
        { name: 'Skype', icon: IoLogoSkype, color: 'text-blue-400' },
        { name: 'Slack', icon: IoLogoSlack, color: 'text-orange-400' },
        { name: 'YouTube', icon: IoLogoYoutube, color: 'text-red-600' },
        { name: 'Google', icon: IoLogoGoogle, color: 'text-blue-500' },
        { name: 'Instagram', icon: IoLogoInstagram, color: 'text-pink-500' },
        { name: 'Spotify', icon: IoMusicalNotes, color: 'text-green-500' },
        { name: 'Yahoo', icon: IoLogoYahoo, color: 'text-purple-500' },
        { name: 'Facebook', icon: IoLogoFacebook, color: 'text-blue-600' },
        { name: 'Figma', icon: IoLogoFigma, color: 'text-orange-500' },
        { name: 'Paypal', icon: IoLogoPaypal, color: 'text-blue-700' },
        { name: 'Photo', icon: IoImages, color: 'text-yellow-500' },
    ];

    const notificationsData = [
        { title: "Congratulations Jhon", desc: "Many congtars jhon. You have won...", time: "Today", img: myImg, type: 'img' },
        { title: "New Account Created", desc: "From USA an user has registered.", time: "Yesterday", icon: "RS", color: "bg-blue-600", type: 'initial' },
        { title: "Payment Recived", desc: "New payment recived successfully", time: "1d ago", icon: "VISA", color: "bg-yellow-600", type: 'icon' },
        { title: "New Order Recived", desc: "Recived new order from michle", time: "2:15 AM", icon: IoCartOutline, color: "bg-pink-600", type: 'react-icon' },
        { title: "Congratulations Jhon", desc: "Many congtars jhon. You have won...", time: "Today", img: myImg, type: 'img' },
    ];

    const cartData = [
        { name: "Red Airpods", price: "$149", color: "bg-red-600" },
        { name: "Men Polo Tshirt", price: "$139", color: "bg-gray-200" },
        { name: "Blue Jeans Casual", price: "$485", color: "bg-blue-800" },
        { name: "Fancy Shirts", price: "$758", color: "bg-gray-500" },
        { name: "Home Sofa Set", price: "$546", color: "bg-gray-400" },
        { name: "Black iPhone", price: "$1049", color: "bg-gray-900" },
        { name: "Goldan Watch", price: "$689", color: "bg-yellow-600" },
    ];

    const [selectedFlag, setSelectedFlag] = useState(countryFlag[0]);
    
    // Toggle States
    const [flagDropdownOpen, setFlagDropdownOpen] = useState(false);
    const [checkDropdownOpen, setCheckDropdownOpen] = useState(false);
    const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false); 

    // Refs
    const checkRef = useRef(null);
    const appsRef = useRef(null);
    const searchRef = useRef(null);
    const notifRef = useRef(null);
    const cartRef = useRef(null);
    const profileRef = useRef(null);

    const handleFlagClick = () => setFlagDropdownOpen((prev) => !prev);
    const handleSelectFlag = (flag) => { setSelectedFlag(flag); setFlagDropdownOpen(false); };
    const handleProfileClick = () => setProfileDropdownOpen((prev) => !prev);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) setProfileDropdownOpen(false);
            if (notifRef.current && !notifRef.current.contains(event.target)) setNotificationsOpen(false);
            if (cartRef.current && !cartRef.current.contains(event.target)) setCartOpen(false);
            if (checkRef.current && !checkRef.current.contains(event.target)) setCheckDropdownOpen(false);
            if (appsRef.current && !appsRef.current.contains(event.target)) setAppsDropdownOpen(false);
            if (searchRef.current && !searchRef.current.contains(event.target)) setSearchDropdownOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-body-bg border-b border-border-color shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 py-3.5 w-full box-border relative">
            
            {/* Left Side: Toggle Only */}
            <div className="flex items-center">
                <button onClick={onToggleSidebar} className="text-3xl cursor-pointer text-gray-300 hover:text-white transition-colors bg-transparent border-none outline-none focus:outline-none">
                    <IoMdMenu/>
                </button>
            </div>

            {/* --- FULL FEATURED MOBILE SEARCH OVERLAY --- */}
            {mobileSearchOpen && (
                <div className="fixed inset-0 bg-[#0f1535]/95 backdrop-blur-sm z-[100] p-4 animate-in fade-in duration-200 flex flex-col md:hidden">
                    {/* Header: Input */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex-1">
                            <input 
                                type="text" 
                                placeholder='Search...' 
                                className="w-full h-11 rounded-xl border border-border-color dark:border-gray-600 px-10 outline-none bg-input-bg dark:bg-[#1a1f3a] text-text-main dark:text-white font-sans placeholder-text-muted dark:placeholder-gray-500 focus:border-blue-500 transition-all shadow-lg" 
                                autoFocus 
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-400 text-lg"><IoSearchOutline /></span>
                            <IoClose className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-400 text-xl cursor-pointer" onClick={() => setMobileSearchOpen(false)}/>
                        </div>
                    </div>

                    {/* Content Body: Scrollable */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        <div className="bg-card-bg dark:bg-[#1a1f3a] rounded-xl p-5 border border-border-color dark:border-gray-700 shadow-2xl">
                            {/* Recent Searches */}
                            <div className="mb-6">
                                <h6 className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase mb-3">Recent Searches</h6>
                                <div className="flex flex-wrap gap-2">
                                    {recentSearches.map((item, index) => (
                                        <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-text-main dark:text-gray-300 text-sm border border-border-color dark:border-gray-700">
                                            {item} <IoSearchOutline className="ml-2 text-xs opacity-50"/>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <hr className="border-border-color dark:border-gray-700 my-4" />
                            {/* Tutorials */}
                            <div className="mb-6">
                                <h6 className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase mb-3">Tutorials</h6>
                                <div className="space-y-4">
                                    {tutorialsData.map((tut, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className={`text-2xl ${tut.color} opacity-90`}><tut.icon /></div>
                                            <span className="ml-3 text-text-main dark:text-gray-300 text-sm">{tut.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <hr className="border-border-color dark:border-gray-700 my-4" />
                            {/* Members */}
                            <div className="mb-4">
                                <h6 className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase mb-3">Members</h6>
                                <div className="space-y-4">
                                    {membersData.map((member, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img src={member.img} alt={member.name} className="w-9 h-9 rounded-full object-cover"/>
                                                <div className="ml-3">
                                                    <p className="text-sm text-text-main dark:text-gray-200 font-medium">{member.name}</p>
                                                    <p className="text-xs text-text-muted dark:text-gray-500">{member.role}</p>
                                                </div>
                                            </div>
                                            <IoPersonOutline className="text-text-muted dark:text-gray-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-4 py-3 bg-indigo-600 rounded-xl text-white font-medium shadow-lg active:scale-95 transition-transform">
                            See All Search Results
                        </button>
                    </div>
                </div>
            )}

          {/* --- DESKTOP SEARCH BAR + THEME TOGGLE (Middle Section) --- */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-3 mx-4">
                
                {/* 1. Search Input (Reduced Width) */}
                <div className="relative w-[280px] lg:w-[350px]" ref={searchRef}>
                    <input 
                        type="text" 
                        placeholder='Search...' 
                        className="w-full h-10 rounded-full border border-border-color px-6 pl-10 outline-none bg-input-bg text-text-main font-sans placeholder-text-muted focus:border-blue-500 transition-all dark:bg-gray-800 dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-600" 
                        onFocus={() => setSearchDropdownOpen(true)} 
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500"><IoSearchOutline /></span>
                    
                    {/* Search Dropdown */}
                    {searchDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-body-bg border border-border-color dark:border-gray-600 rounded-xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                             <div className="p-4 overflow-y-auto max-h-[60vh] scrollbar-custom text-left">
                                <h6 className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase mb-3">Recent Searches</h6>
                                <div className="flex flex-wrap gap-2">
                                    {recentSearches.map((item, index) => (
                                        <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-text-main dark:text-gray-300 text-sm border border-border-color dark:border-gray-700">{item}</span>
                                    ))}
                                </div>
                             </div>
                        </div>
                    )}
                </div>

                {/* 2. Theme Toggle Icon (Beside Search) */}
                <button 
                    onClick={toggleTheme} 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-all border border-gray-300 dark:border-gray-700"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
                </button>

            </div>

            {/* Right Side Icons: Search | Flag | Check | Apps | Notif | Cart | Profile */}
            <div className="flex items-center gap-5 md:gap-8">
                
                {/* 1. Mobile Search Trigger */}
                <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)} className="md:hidden text-2xl text-text-main dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                    <IoSearchOutline/>
                </button>

                {/* Mobile Theme Toggle */}
                <button 
                    onClick={toggleTheme}
                    className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-all border border-gray-300 dark:border-gray-700"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
                </button>

                {/* 2. Language Selector (UPDATED: Fixed Centered on Mobile) */}
                <div className="relative cursor-pointer hidden md:block">
                    <img src={selectedFlag.flag} alt={selectedFlag.countryName} className="w-7 h-7 md:w-8 md:h-8 rounded-full hover:opacity-80 transition-opacity" onClick={handleFlagClick}/>
                    {flagDropdownOpen && (
                        <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[300px] md:absolute md:top-full md:right-0 md:left-auto md:translate-x-0 md:w-[160px] md:mt-3 bg-body-bg border border-border-color dark:border-gray-600 z-50 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                            <div className="hidden md:block absolute -top-[7px] right-[11px] w-3.5 h-3.5 bg-body-bg border-t border-l border-border-color dark:border-gray-600 rotate-45"></div>
                            <div className="py-2 px-1 relative z-10 bg-body-bg rounded-xl max-h-[60vh] overflow-y-auto hover-scrollbar">
                                {countryFlag.filter(flag => flag.countryName !== selectedFlag.countryName).map(flag => (
                                    <div className="flex items-center p-2.5 hover:bg-gray-200 dark:hover:bg-white/5 rounded-lg cursor-pointer transition-colors group" key={flag.countryName} onClick={() => handleSelectFlag(flag)}>
                                        <img src={flag.flag} alt={flag.countryName} className="w-6 h-6 rounded-full object-cover"/>
                                        <p className="text-sm ml-3 text-text-main dark:text-gray-300 group-hover:text-text-main dark:group-hover:text-white font-medium">{flag.countryName}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 3. Check Icon */}
                <div className="relative cursor-pointer hidden md:block" ref={checkRef}>
                    <div onClick={() => setCheckDropdownOpen(!checkDropdownOpen)} className="text-[20px] md:text-[22px] text-text-main dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"><IoCheckmarkDoneOutline /></div>
                    {checkDropdownOpen && (
                        <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[400px] md:max-w-none md:absolute md:top-full md:right-[-80px] md:left-auto md:translate-x-0 md:mt-4 md:w-[850px] bg-body-bg border border-border-color dark:border-gray-600 rounded-xl shadow-2xl z-50 p-4 md:p-6 animate-in fade-in zoom-in-95 duration-200">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto hover-scrollbar">
                                {appsData.map((app, index) => (
                                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-100 dark:bg-[#1a1f3a] hover:bg-gray-200 dark:hover:bg-[#23294a] transition-colors border border-border-color dark:border-gray-700/50 cursor-pointer group">
                                        <div className={`shrink-0 w-12 h-12 ${app.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <app.icon className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-text-main dark:text-white font-bold text-base mb-1 group-hover:text-primary transition-colors">{app.title}</h4>
                                            <p className="text-text-muted dark:text-gray-400 text-xs leading-relaxed line-clamp-2">{app.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 4. Apps Icon */}
                <div className="relative cursor-pointer hidden md:block" ref={appsRef}>
                    <div onClick={() => setAppsDropdownOpen(!appsDropdownOpen)} className="text-[20px] md:text-[22px] text-text-main dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"><IoAppsOutline/></div>
                    {appsDropdownOpen && (
                        <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[320px] md:absolute md:top-full md:right-[-60px] md:left-auto md:translate-x-0 md:mt-4 md:w-[320px] bg-body-bg border border-border-color dark:border-gray-600 rounded-xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                             <div className="hidden md:block absolute -top-[7px] right-[65px] w-3.5 h-3.5 bg-body-bg border-t border-l border-border-color dark:border-gray-600 rotate-45 z-10"></div>
                             <div className="relative z-0 grid grid-cols-3 border-border-color dark:border-gray-700">
                                {webAppsData.map((app, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center p-4 border-r border-b border-border-color dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer aspect-square">
                                        <app.icon className={`text-3xl mb-2 ${app.color}`} />
                                        <span className="text-text-main dark:text-gray-300 text-sm font-medium">{app.name}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    )}
                </div>

                {/* 5. Notifications */}
                <div className="relative cursor-pointer" ref={notifRef}>
                    <div onClick={() => setNotificationsOpen(!notificationsOpen)} className="relative text-text-main dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors text-[20px] md:text-[22px]">
                        <IoIosNotificationsOutline />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">5</span>
                    </div>
                    {notificationsOpen && (
                        <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[350px] md:absolute md:top-full md:right-0 md:left-auto md:translate-x-0 md:mt-3 md:w-80 bg-body-bg border border-border-color dark:border-gray-600 z-50 rounded-xl shadow-lg animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-4 border-b border-border-color dark:border-gray-700 flex justify-between items-center">
                                <h4 className="text-text-main dark:text-white font-bold text-sm">Notifications</h4>
                                <IoEllipsisVertical className="text-text-muted dark:text-gray-400 cursor-pointer hover:text-text-main dark:hover:text-white" />
                            </div>
                            <div className="max-h-[60vh] overflow-y-auto scrollbar-custom">
                                {notificationsData.map((item, idx) => (
                                    <div key={idx} className="flex items-start p-4 hover:bg-gray-200 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border-b border-border-color dark:border-gray-700/50 last:border-0">
                                        <div className="shrink-0 mr-3">
                                            {item.type === 'img' && <img src={item.img} alt="user" className="w-10 h-10 rounded-full object-cover" />}
                                            {item.type === 'initial' && <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-xs`}>{item.icon}</div>}
                                            {item.type === 'icon' && <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-xs border border-gray-300">{item.icon}</div>}
                                            {item.type === 'react-icon' && <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white text-lg`}><item.icon/></div>}
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-text-main dark:text-white text-sm font-medium mb-0.5">{item.title}</h5>
                                            <p className="text-text-muted dark:text-gray-400 text-xs leading-snug mb-1">{item.desc}</p>
                                            <span className="text-text-muted dark:text-gray-500 text-[10px] font-semibold">{item.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 text-center border-t border-border-color dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-xl">
                                <span className="text-xs text-blue-600 dark:text-blue-500 font-medium hover:underline">View All Notifications</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* 6. Shopping Cart */}
                <div className="relative cursor-pointer" ref={cartRef}>
                    <div onClick={() => setCartOpen(!cartOpen)} className="relative text-text-main dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors text-[20px] md:text-[22px]">
                        <IoCartOutline />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">8</span>
                    </div>
                    {cartOpen && (
                        <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[350px] md:absolute md:top-full md:right-0 md:left-auto md:translate-x-0 md:mt-3 md:w-80 bg-body-bg border border-border-color dark:border-gray-600 z-50 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-4 border-b border-border-color dark:border-gray-700 flex justify-between items-center bg-card-bg dark:bg-[#1a1f3a] rounded-t-xl">
                                <h4 className="text-text-main dark:text-white font-bold text-sm">8 New Orders</h4>
                                <IoClose className="text-text-muted dark:text-gray-400 cursor-pointer hover:text-text-main dark:hover:text-white text-lg" onClick={() => setCartOpen(false)} />
                            </div>
                            <div className="max-h-[60vh] overflow-y-auto scrollbar-custom p-0">
                                {cartData.map((item, idx) => (
                                    <div key={idx} className="flex items-center p-3 border-b border-border-color dark:border-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors">
                                        <ProductPlaceholder color={item.color} />
                                        <div className="ml-3 flex-1">
                                            <h5 className="text-text-main dark:text-white text-sm font-medium">{item.name}</h5>
                                            <span className="text-text-muted dark:text-gray-400 text-xs font-bold">{item.price}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded border border-border-color dark:border-gray-600 flex items-center justify-center text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"><IoTrashOutline/></div>
                                            <div className="w-8 h-8 rounded border border-border-color dark:border-gray-600 flex items-center justify-center text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"><IoEyeOutline/></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-border-color dark:border-gray-700 bg-card-bg dark:bg-[#1a1f3a] rounded-b-xl">
                                <button className="w-full py-2 rounded bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium text-sm hover:from-pink-700 hover:to-purple-700 transition-all shadow-lg">View Products</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* 7. Profile */}
                <div className="relative" ref={profileRef}>
                    <div onClick={handleProfileClick} className="border-2 border-indigo-500 rounded-full h-8 w-8 md:h-11 md:w-11 flex items-center justify-center cursor-pointer hover:border-indigo-400 transition-colors">
                        <img src={myImg} alt="profile" className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover" />
                    </div>
                    {profileDropdownOpen && (
                        <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[300px] md:absolute md:top-full md:right-0 md:left-auto md:translate-x-0 md:mt-3 md:w-60 bg-body-bg border border-border-color dark:border-gray-600 z-50 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex flex-col items-center py-5 border-b border-border-color dark:border-gray-700">
                                <img src={myImg} alt="Jhon" className="w-16 h-16 rounded-full object-cover border-2 border-border-color dark:border-gray-600 mb-2"/>
                                <h4 className="text-text-main dark:text-white font-bold text-base">Hello, Jhon</h4>
                            </div>
                            <div className="py-2">
                                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-3 text-sm text-text-main dark:text-gray-300 hover:text-text-main dark:hover:text-white transition-colors">
                                    <IoPersonOutline size={18} /><span>Profile</span>
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-3 text-sm text-text-main dark:text-gray-300 hover:text-text-main dark:hover:text-white transition-colors">
                                    <IoSettingsOutline size={18} /><span>Setting</span>
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-3 text-sm text-text-main dark:text-gray-300 hover:text-text-main dark:hover:text-white transition-colors">
                                    <IoGridOutline size={18} /><span>Dashboard</span>
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-3 text-sm text-text-main dark:text-gray-300 hover:text-text-main dark:hover:text-white transition-colors">
                                    <IoWalletOutline size={18} /><span>Earning</span>
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-3 text-sm text-text-main dark:text-gray-300 hover:text-text-main dark:hover:text-white transition-colors">
                                    <IoCloudDownloadOutline size={18} /><span>Downloads</span>
                                </div>
                            </div>
                            <div className="border-t border-border-color dark:border-gray-700 py-2">
                                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-3 text-sm text-text-main dark:text-white hover:text-text-main dark:hover:text-gray-200 transition-colors">
                                    <IoPowerOutline size={18} /><span>Logout</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar;