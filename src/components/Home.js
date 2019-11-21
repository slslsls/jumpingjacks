import React from 'react';
import { Link } from 'react-router-dom';
import Translations from '../utils/common/translations';
import './Home.css';

class Home extends React.Component {
  state = {
    display: false,
    text: Translations[this.props.store.language].home,
    selectedLanguage: this.props.store.language
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
      this.props.store.language = newLanguage;
      this.setState({
        text: Translations[newLanguage].home,
        selectedLanguage: newLanguage
      });
    }
  }

  render() {
    return (
      <div>
        <div className={`${this.state.display ? '' : 'invisible'} home-background`}>
          <div className="home-frame">
            <div className="language-window">
              {Object.keys(Translations).map((l, idx ) =>
                <div
                  key={idx}
                  className={`language ${this.state.selectedLanguage === l ? 'selected-language' : ''}`}
                  onClick={this.changeLanguage(l)}
                >
                  {l}
                </div>)}
            </div>
            <Link to="/blackjack">
              <div className="nav-button">{this.state.text.practice_blackjack}</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
