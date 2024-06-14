import React, { useContext, useState } from 'react';
import { FaXmark, FaBarsStaggered, FaBlog } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
  ];

  if (user && user.role === 'admin') {
    navItems.push({ link: "Dashboard", path: "/admin/dashboard" });
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="brand">
            <FaBlog className="icon" />
            Books
          </Link>
          <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map(({ link, path }) => (
              <Link key={link} to={path} className="nav-link" onClick={toggleMenu}>
                {link}
              </Link>
            ))}
            {user ? (
              <button onClick={logout} className="nav-link">Logout</button>
            ) : (
              <>
                <Link to="/login" className="nav-link" onClick={toggleMenu}>Login</Link>
                <Link to="/signup" className="nav-link" onClick={toggleMenu}>Register</Link>
              </>
            )}
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
