import React, { useContext, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';


const Navbar = () => {


  const [menu, setMenu] = useState("menu")

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt = "" className="logo"/></Link>
      <ul className="navbar-menu">
        <li onClick = {()=>setMenu("menu")}className= {menu==="menu"? "active":""}>menu</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src = {assets.basket_icon} alt = "" /> </Link>
          <div className={getTotalCartAmount()===0?"":dot}></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;