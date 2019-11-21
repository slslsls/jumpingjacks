import React from 'react';
import { Link } from 'react-router-dom';
import Translations from '../utils/common/translations';
import './Home.css';

const languages = [
  Translations.english_label,
  Translations.mandarin_label
];

class Home extends React.Component {
  state = {
    display: false,
    text: Translations[this.props.store.language].home
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
        text: Translations[this.props.store.language].home
      });
    }
  }

  render() {
    return (
      <div>
        <div className={`${this.state.display ? '' : 'invisible'} home-background`}>
          <div className="home-frame">
            <div className="language-window">
              {languages.map((l, idx ) =>
                <div
                  key={idx}
                  className="language"
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
