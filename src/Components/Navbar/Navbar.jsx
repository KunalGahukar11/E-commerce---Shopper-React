import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown_icon from '../Assets/nav_dropdown.png';


const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const toggleDropdown = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>shopper</p>
        </div>
        <img className='nav-dropdown' onClick={toggleDropdown} src={nav_dropdown_icon} alt="" />
          <ul ref={menuRef} className="nav-menu">
              <li onClick={() => { setMenu("shop") }}>
                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>Shop</Link>
                  {menu === "shop" ? <hr /> : <></>}
              </li>
              <li onClick={() => { setMenu("mens") }}>
                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/mens'}>Mens</Link>
                  {menu === "mens" ? <hr /> : <></>}
              </li>
              <li onClick={() => { setMenu("womens") }}>
                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/womens'}>Womens</Link>
                  {menu === "womens" ? <hr /> : <></>}
              </li>
              <li onClick={() => { setMenu("kids") }}>
                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/kids'}>Kids</Link>
                  {menu === "kids" ? <hr /> : <></>}
              </li>
          </ul>
        <div className="nav-cart">
            <Link to={'/login'}><button>Log in</button></Link>
            <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar