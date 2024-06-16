import React, { useContext } from 'react';
import { AiTwotoneCar  } from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Contact", path: "/contact" },
  ];

  if (user && user.role === 'admin') {
    navItems.push({ link: "Dashboard", path: "/admin/dashboard" });
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="brand">
            <AiTwotoneCar  className="icon" />
            TravelHanoi
          </Link>
          <ul className="nav-items">
            {navItems.map(({ link, path }) => (
              <li key={link}>
                <Link to={path} className="nav-link">
                  {link}
                </Link>
              </li>
            ))}
            {user ? (
              <li>
                <button onClick={logout} className="nav-link logout-button">Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
