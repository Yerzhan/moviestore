import React from 'react';
import styles from './MovieItem.module.scss';

class FeaturedItem extends React.Component {
  render() {
    return (
      <div
        className={styles.Featured}
        style={{ backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)' }}
      >
        <div className={styles.content}>
          <img
            className={styles.logo}
            src="http://www.returndates.com/backgrounds/narcos.logo.png"
            alt="narcos background"
          />
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className={styles.overlay}></div>
      </div>
    );
  }
}

export default FeaturedItem;