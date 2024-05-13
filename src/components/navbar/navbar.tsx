
import { useState, useContext  } from 'react';
import './navbar.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {


  const [menu, setMenu] = useState("menu")
  const context = useContext(StoreContext);
  const getTotalCartAmount = context ? context.getTotalCartAmount : () => 0;
 

  return (
    <div className="navbar">
      <img src={assets.logo} alt = "" className="logo"/>
      <ul className="navbar-menu">
        <li onClick = {()=>setMenu("menu")}className= {menu==="menu"? "active":""}>menu</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
        <Link to='react-app/cart'><img src = {assets.basket_icon} alt = "" /> </Link>
        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

          
        </div>
        <Link to="/react-app/login">
          <button className="signin-button">sign in</button>
        </Link>
        

      </div>
    </div>
  );
};

export default Navbar;