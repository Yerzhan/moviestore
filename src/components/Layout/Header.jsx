import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.scss';

class Header extends Component {
  render() {
    return (
      <div id="navigation" className={styles.Navigation}>
        <nav>
          <span className={styles.logo}><Link to='/'>moovies</Link></span>
          <ul>
            <li><Link to='/about/'>About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;