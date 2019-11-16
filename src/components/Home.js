import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  state = {
    display: false
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        display: true,
      });
    }, 300);
  }

  render() {
    return (
      <div>
        <div className={`${this.state.display ? '' : 'invisible'} home-background`}>
          <div className="home-frame">
            <div className="nav-button">
              <Link to="/blackjack">Blackjack</Link>
            </div>
            <div className="nav-button">
              <Link to="/holdem">Texas Holdem</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
