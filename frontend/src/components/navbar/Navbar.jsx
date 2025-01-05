import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <div className='logo-name-container'>
       <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
        <span className='name'>Luna Beauty</span>
        </div>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"? "active":""}>Home</Link>
        <a href='#explore-products' onClick={()=>setMenu("menu")} className={menu=="menu"? "active":""}>Products</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu=="contact"?"active":""}>Contact us</a>
        <a href='#footer' onClick={()=>setMenu("about")} className={menu=="about"?"active":""}>About us</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-icon'>
          <img src={assets.search_logo} alt="search"  className='search'/>
          <Link to='/cart'><img src={assets.shopping} alt="" className='basket' /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
