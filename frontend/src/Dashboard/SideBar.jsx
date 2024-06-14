import React from 'react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import img from '../../src/assets/profile.jpg';
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
          <HiOutlineCloudUpload />
          <span>Upload Book</span>
        </Link>
        <Link className="sidebar-item" to="/admin/dashboard/manage">
          <HiInbox />
          <span>Manage Books</span>
        </Link>
        <Link className="sidebar-item" to="#">
          <HiUser />
          <span>Users</span>
        </Link>
        <Link className="sidebar-item" to="#">
          <HiShoppingBag />
          <span>Products</span>
        </Link>
        <Link className="sidebar-item" to="/login">
          <HiArrowSmRight />
          <span>Sign In</span>
        </Link>
        <Link className="sidebar-item" to="/logout">
          <HiTable />
          <span>Log out</span>
        </Link>
        <Link className="sidebar-item" to="#">
          <HiChartPie />
          <span>Upgrade to Pro</span>
        </Link>
        <Link className="sidebar-item" to="#">
          <HiViewBoards />
          <span>Documentation</span>
        </Link>
        <Link className="sidebar-item" to="#">
          <HiSupport />
          <span>Help</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
