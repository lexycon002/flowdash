import React from 'react'
import Topbar from './components/Topbar'
import SidebarComponent from './components/SidebarComponent'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div className="app-container">
      <div className="side-container">
          <SidebarComponent/>
      </div>
      <div className="top-container">
          <Topbar/>
          <Dashboard />
      </div>
    </div>
  )
}

export default App