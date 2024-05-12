import { useState } from 'react';
import './navbar.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {


  const [menu, setMenu] = useState("menu")

  return (
    <div className="navbar">
      <img src={assets.logo} alt = "" className="logo"/>
      <ul className="navbar-menu">
        <li onClick = {()=>setMenu("menu")}className= {menu==="menu"? "active":""}>menu</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <img src = {assets.basket_icon} alt = "" />
          <div className="dot"></div>
        </div>
        <Link to="/react-app/login">
          <button className="signin-button">sign in</button>
        </Link>
        {/* <button>sign in</button> */}
      </div>
    </div>
  );
};

export default Navbar;