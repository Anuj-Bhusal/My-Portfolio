import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LOGO1 from '../assets/LOGO1.png';

const Navbar = () => {
  let navigate = useNavigate();
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  }

  const handleLinkClick = () => {
    closeMenu(); 
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <img src={LOGO1} alt="logo" />
        <div className='hamburger' onClick={isMenuOpen ? closeMenu : openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul ref={menuRef} className='nav-menu'>
          <div className='hamburger close' onClick={closeMenu}>
            <span></span>
            <span></span>
          </div>
          <li>
            <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          </li>
        </ul>
        <button className='nav-connect' 
          onClick={() => {
            handleLinkClick(); 
            navigate('/contact', { replace: true });
          }}>
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;