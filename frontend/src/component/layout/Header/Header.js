import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'
import { FaSearch } from 'react-icons/fa'


const Header = ({ auth }) => {


  var body = document.getElementsByTagName('body')[0];

  const toggleNavigation = (event) => {
    event.preventDefault();
    body.classList.toggle('nav-open');
  }


  return (
    <div className="fixed-bar">
      <Link to="/search"><div className="search skip"><FaSearch  size={28}/></div></Link>       
      <a href="#navigation" onClick={toggleNavigation} className="nav-trigger">
        Menu <span></span>
      </a>
      <nav className="nav-container" id="navigation">
        <ul className="nav">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;
