import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarComponent from '../SidebarComponent';
import Topbar from './Topbar';

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Detect Screen Size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-collapse on mobile, auto-open on desktop
      if (mobile) {
        setIsSidebarOpen(false); 
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Toggle Function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 3. Close sidebar when clicking overlay (Mobile only)
  const closeSidebarMobile = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-body-bg overflow-hidden">
      
      {/* --- MOBILE OVERLAY (Black background) --- */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeSidebarMobile}
        />
      )}

      {/* --- SIDEBAR CONTAINER --- */}
     <div 
      className={`
        h-full z-50 transition-all duration-300 ease-in-out border-r border-gray-800
        ${isMobile ? 'fixed left-0 top-0 shadow-2xl' : 'relative'} 
        ${isSidebarOpen ? 'w-[260px]' : (isMobile ? 'w-0 border-none' : 'w-[80px]')}
      `}
>
  <div className="h-full overflow-hidden">
    <SidebarComponent 
       // CRITICAL: If mobile, collapsed must be FALSE so "Flowdash" shows.
       collapsed={isMobile ? false : !isSidebarOpen} 
       toggled={isSidebarOpen} 
    />
  </div>
</div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Topbar needs the toggle function */}
        <Topbar onToggleSidebar={toggleSidebar} />
        
        {/* Page Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 scrollbar-thin">
           <Outlet />
        </div>
      </div>

    </div>
  );
}

export default MainLayout;