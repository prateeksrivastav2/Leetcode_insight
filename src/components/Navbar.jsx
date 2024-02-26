import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const navbarStyles = {
    background: 'linear-gradient(to left, #333, #000)',
    height: expanded ? '200px' : '60px',
    transition: 'width 0.3s ease',
    width: expanded ? '100%' : '100%',
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={navbarStyles}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">LeetCode Visualizer</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/comparisons">Compare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;