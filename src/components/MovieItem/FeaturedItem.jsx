import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import styles from './MovieItem.module.scss';
import config from '../../config/imageConfig.json';

class FeaturedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0
    };
  }

  componentDidMount(){
    this.interval = setInterval(this.updateItem.bind(this), 5000);
  }

  updateItem() {
    console.log(this.state);
    const nextIndex = (this.state.itemIndex + 1) % this.props.items.length;
    this.setState({itemIndex: nextIndex});
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    const featured = this.props.items[this.state.itemIndex];
    const background = `url(${config.images.secure_base_url}/original${featured.backdrop_path})`;
    const poster = `${config.images.secure_base_url}/w342${featured.poster_path}`;

    return (
      <CSSTransitionGroup
      transitionName="reveal"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
        <div
          key={this.state.itemIndex}
          className={styles.Featured}
          style={{ backgroundImage: background }}
        >
          <div className={styles.content}>
            <div className={styles.poster}>
              <img className={styles.logo} src={poster} alt='featured poster'/>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.overview}</p>
          </div>
          <div className={styles.overlay}></div>
        </div>
       </CSSTransitionGroup> 
    );
  }
}

export default FeaturedItem;