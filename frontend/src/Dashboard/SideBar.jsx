// SideBar.jsx
import React from 'react';
import { HiChartPie } from 'react-icons/hi';
import { FaMessage, FaFilePen, FaArchway, FaArrowUpFromBracket  } from "react-icons/fa6";

import img from '../../src/assets/minion.jpg';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={img} alt="Profile" />
        </Link>
        <p>Demo User</p>
      </div>
      <div className="sidebar-items">
        <Link className="sidebar-item" to="/admin/dashboard">
          <HiChartPie />
          <span>Dashboard</span>
        </Link>
        <Link className="sidebar-item" to="/admin/dashboard/upload">
          <FaArrowUpFromBracket  />
          <span>Add New Place</span>
        </Link>
        <Link className="sidebar-item" to="/admin/dashboard/manage">
          <FaArchway  />
          <span>Manage Places</span>
        </Link>
        <Link className="sidebar-item" to="/admin/dashboard/reviews">
          <FaFilePen  />
          <span>Manage Reviews</span>
        </Link>
        <Link className="sidebar-item" to="/admin/dashboard/contacts">
          <FaMessage  />
          <span>Manage Contact Messages</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
