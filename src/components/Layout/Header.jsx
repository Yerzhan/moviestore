import React, { Component } from 'react';
import styles from './Layout.module.scss';

class Header extends Component {
  render() {
    return (
      <div id="navigation" className={styles.Navigation}>
        <nav>
          <span className={styles.logo}><a href='/'>moovies</a></span>
          <ul>
            <li>About</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;