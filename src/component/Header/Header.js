import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
       <nav>
           <a href="/shop">shop</a>
           <a href="/order">oder </a>
           <a href="/manage">manage inventory here</a>
       </nav>
        </div>

    );
};

export default Header;