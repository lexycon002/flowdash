import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import sidebarItems from "../data/sidebarItems"; 

function SidebarComponent({ collapsed, toggled }) {
  const navigate = useNavigate();
  const location = useLocation(); 

  // --- CONFIGURATION ---
  const hexBodyBg = 'var(--sidebar-bg)'; 
  
  const activeBg = 'var(--border-color)'; 
  const hoverBg = 'var(--border-color)';   
  
  // Dynamic text colors based on theme
  const activeText = 'var(--text-main)';
  const inactiveText = 'var(--text-muted)';

  // Logic: On mobile (toggled=true), show full logo. On desktop, follow collapsed state.
  const showFullLogo = toggled || !collapsed;

  const menuItemStyles = {
    button: ({ active }) => ({
      backgroundColor: active ? activeBg : 'transparent',
      color: active ? activeText : inactiveText,
      borderRadius: '8px', 
      margin: '4px 10px',  
      paddingLeft: '20px', 
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: active ? activeBg : hoverBg, 
        color: activeText,
      },
    }),
    subMenuContent: { backgroundColor: 'transparent' },
    arrow: { color: inactiveText },
    icon: ({ active }) => ({ color: active ? '#0d6efd' : 'inherit' })
  };

  return (
    <div className="h-full flex flex-col bg-body-bg">
      <Sidebar 
        collapsed={collapsed} 
        toggled={toggled} 
        breakPoint="md" 
        backgroundColor={hexBodyBg}
        rootStyles={{ border: 'none' }}
        width="260px"
        className="h-full text-body-color"
      >
        {/* --- LOGO SECTION --- */}
        <div 
          className={`h-[70px] flex items-center border-b border-border-color mb-4 transition-all duration-300 overflow-hidden
          ${showFullLogo ? 'justify-start px-6' : 'justify-center px-0'}`}
        >
            {/* CHANGED: 'text-white' to 'text-text-main' so it's visible in Light Mode */}
            <h1 className="text-2xl font-extrabold text-text-main tracking-wider cursor-pointer whitespace-nowrap">
              {showFullLogo ? (
                <span>Flowdash</span>
              ) : (
                <span className="text-blue-500">FD</span>
              )}
            </h1>
        </div>

        {/* --- MENU --- */}
        <div className="flex-1 hover-scrollbar pb-4">
          <Menu menuItemStyles={menuItemStyles}>
            {sidebarItems.map((item, index) => {
              const isActiveParent = item.children?.some(child => child.path === location.pathname);

              if (item.children) {
                return (
                  <SubMenu 
                    key={index} 
                    label={item.title} 
                    icon={item.icon && <item.icon size={18} />}
                    defaultOpen={isActiveParent} 
                    active={isActiveParent} 
                  >
                    {item.children.map((child, cIndex) => {
                       const isChildActive = location.pathname === child.path;
                       return (
                        <MenuItem 
                          key={cIndex}
                          active={isChildActive} 
                          onClick={() => child.path && navigate(child.path)}
                          icon={<div className={`w-1.5 h-1.5 rounded-full ${isChildActive ? 'bg-blue-500' : 'bg-gray-500'}`}/>}
                        >
                          {child.title}
                        </MenuItem>
                       )
                    })}
                  </SubMenu>
                );
              }
              
              return (
                <MenuItem 
                  key={index}
                  active={location.pathname === item.path}
                  icon={item.icon && <item.icon size={18} />}
                  onClick={() => item.path && navigate(item.path)}
                >
                  {item.title}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </Sidebar>
    </div>
  )
}

export default SidebarComponent;