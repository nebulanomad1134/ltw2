// DashboardLayout.jsx
import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

export const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

// export default DashboardLayout;
