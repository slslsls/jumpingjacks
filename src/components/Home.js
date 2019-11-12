import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home-background">
          <div className="home-text-box">
            <div className="nav-button">
              <h2><Link to="/blackjack">Blackjack</Link></h2>
            </div>
            <div className="nav-button">
              <h2><Link to="/holdem">Texas Holdem</Link></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
