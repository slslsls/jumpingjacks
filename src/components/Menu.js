import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><Link to="/blackjack">Blackjack</Link></li>
            <li><Link to="/holdem">Holdem</Link></li>
            <li><Link to="/language">Language</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
