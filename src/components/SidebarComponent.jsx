import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import sidebarItems from "../data/sidebarItems"
import { FaChevronLeft, FaChevronDown } from "react-icons/fa6";
import "./sidebar.css";

function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="sidebar-section">
      <Sidebar className="sidebar-cont" collased={collapsed} transitionDuration={500}>
        <Menu>
          <MenuItem>
            <span className="sidebar-logo">{collapsed ? "FD" : "Flowdash"}</span>
          </MenuItem>
          {sidebarItems.map((item) =>
            item.children ? (
              <SubMenu
                key={item.title}
                label={
                  <span style={{ display: 'flex', alignItems: 'center', fontSize: "20"}}>
                    {item.icon && <item.icon style={{ marginRight: 10 }} />}
                    <span>{item.title}</span>
                  </span>
                }
              >
                {item.children.map((child) =>
                  child.children ? (
                    <SubMenu
                      key={child.title + (child.path || '')}
                      label={
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {child.cIcon && <child.cIcon style={{ marginRight: 8 }} />}
                          <span>{child.title}</span>
                        </span>
                      }
                    >
                      {child.children.map((nested) => (
                        nested.path ? (
                          <MenuItem key={nested.title + (nested.path || '')} onClick={() => navigate(nested.path)}>
                            {nested.title}
                          </MenuItem>
                        ) : (
                          <MenuItem key={nested.title + (nested.path || '')}>
                            {nested.title}
                          </MenuItem>
                        )
                      ))}
                    </SubMenu>
                  ) : (
                    child.path ? (
                      <MenuItem key={child.title + (child.path || '')} onClick={() => navigate(child.path)}>
                        {child.cIcon && <child.cIcon style={{ marginRight: 8 }} />}
                        {child.title}
                      </MenuItem>
                    ) : (
                      <MenuItem key={child.title + (child.path || '')}>
                        {child.cIcon && <child.cIcon style={{ marginRight: 8 }} />}
                        {child.title}
                      </MenuItem>
                    )
                  )
                )}
              </SubMenu>
            ) : (
              item.path ? (
                <MenuItem key={item.title + (item.path || '')} icon={item.icon && <item.icon />} onClick={() => navigate(item.path)}>
                  {item.title}
                </MenuItem>
              ) : (
                <MenuItem key={item.title + (item.path || '')} icon={item.icon && <item.icon />}>
                  {item.title}
                </MenuItem>
              )
            )
          )}
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SidebarComponent
