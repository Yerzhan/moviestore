import React from 'react';
import styles from './MovieItem.module.scss';

class FeaturedItem extends React.Component {
  render() {
    return (
      <div
        className={styles.Featured}
        style={{ backgroundImage: `url(${this.props.background})` }}
      >
        <div className={styles.content}>
          <div className={styles.poster}>
            <img className={styles.logo} src={this.props.poster} alt='featured poster'/>
          </div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className={styles.overlay}></div>
      </div>
    );
  }
}

export default FeaturedItem;