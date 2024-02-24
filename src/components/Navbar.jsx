import React, { useState,useContext } from 'react';
import Leetcodedata from '../state/context';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const context = useContext(Leetcodedata);
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const navbarStyles = {
    background: 'linear-gradient(to left, #333, #000)',
    height: expanded ? '35vw' : '5vw',
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
              <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/comparisons">Compare</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;