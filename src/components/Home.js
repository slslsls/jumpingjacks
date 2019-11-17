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
            <Link to="/blackjack">
              <div className="nav-button">Blackjack</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
