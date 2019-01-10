import React, { Component } from 'react';
import tmdbLogo from '../../assets/img/tmdblogo.svg';
import styles from './Layout.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <div className={styles.Footer__content}>
          <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          <img src={tmdbLogo} alt='TMDB logo' />
        </div>
      </footer>
    );
  }
};

export default Footer;