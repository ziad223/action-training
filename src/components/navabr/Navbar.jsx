import React, { useEffect, useState } from 'react'
import './navbar.css';
import {  FaChevronDown  , FaHeart, FaMoon   } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMenu, FiSun } from "react-icons/fi";



const Navbar = ({cartItems , watchlist , dark , isDark}) => {
  let [openMenu , setOpenMenu] = useState(false);
  function isOpen(){
    setOpenMenu(!openMenu);
  }
  useEffect(function(){
      document.querySelector(".menu").onclick = function(){
    document.querySelector(".nav-middle ul").classList.toggle("open")
  }
  } , [])
  return (
    <nav>
      <div className="nav-left">
        <Link to='/' className='logo'>Bravo <span>Shop</span></Link>
      </div>
      <div className="nav-middle">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li className='products-parent' onClick={isOpen}><a href="#">
              Products <FaChevronDown/> 
             {openMenu ?  <div className="products-child">
                <Link to="/fake">Fake Store Api</Link>
                <Link to="/dummy">Dummy json Api</Link>
              </div> : null}
              </a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <Link to='/watchlist'>
        <FaHeart className='nav-icon i' />
        <span style={{color : '#fff'}}>({watchlist.length})</span>
        </Link>
        <Link to='/cart'>
        <FaCartShopping className='nav-icon i'  />
        <span style={{color : '#fff'}}>({cartItems.length})</span>
        </Link>
        {dark ?
        <FiSun className='sun i' onClick={isDark}/>
        :
        <FaMoon className='moon i' onClick={isDark} />
         }
         <FiMenu className='menu'/>
      </div>
    </nav>
  )
}

export default Navbar
