import React from 'react';
import { Link } from 'react-router-dom';
import Translations from '../utils/common/translations';
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

  changeLanguage = (newLanguage) => {
    return () => {
      this.setState({
        text: Translations[newLanguage].home,
        selectedLanguage: newLanguage
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className={`${this.state.display ? '' : 'invisible'} home-background`}>
          <div className="home-frame">
            {Object.keys(Translations).map((l, idx ) =>
              <Link to={`/practice-blackjack-${l}`}>
                <h1 className="nav-button">{Translations[l].practice_blackjack}</h1>
              </Link>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
