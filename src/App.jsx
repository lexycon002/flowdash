import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Analysis from './pages/dashboard/Analysis'; 
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <ThemeProvider>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Dashboard is the default page */}
        <Route index element={<Analysis />} />
        <Route path="analysis" element={<Analysis />} />
      </Route>
    </Routes>
    </ThemeProvider>
  );
}

export default App;