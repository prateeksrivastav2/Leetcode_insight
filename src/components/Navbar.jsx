import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navbarStyles = {
    background: 'linear-gradient(to left, #333, #000)',
    height: '4vw', // Adjust the height as needed
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={navbarStyles}>
      <div className="container-fluid">
      <a className="navbar-brand text-white" herf="/">LeetCode Insider</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/comparisons">Comparator</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
