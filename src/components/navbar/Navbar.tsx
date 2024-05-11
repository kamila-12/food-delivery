import React from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt = "" className='logo'/>
      <ul className="navbar-menu">
        <li>menu</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;