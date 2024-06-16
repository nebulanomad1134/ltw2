import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import './DashboardLayout.css';

export const DashboardLayout = () => {
  return (
    <>
      <Navbar /> 
      <div className="dashboard-layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

