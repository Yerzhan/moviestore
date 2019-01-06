import React from 'react';
import { FETCH_STATUS } from '../../helpers/common/types';
import keys from '../../config/keys';
import MovieItem from '../MovieItem';
import styles from './TrendingList.module.scss';

class TrendingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchStatus: FETCH_STATUS.LOADING,
      trendings: [],
    };
  }

  componentDidMount() {
    console.log('fetching trending movies from TMDB...');
    this.fetchTrending();
  }

  async fetchTrending() {
    const url = new URL(`https://api.themoviedb.org/3/trending/movie/day?api_key=${keys.TMDBapiKey}`);

    try {
      const response = await fetch(url);
      const results = await response.json();
      console.log(results);

      this.setState({
        fetchStatus: FETCH_STATUS.SUCCESS,
        trendings: results.results,
      });
    } catch (err) {
      this.setState({
        fetchStatus: FETCH_STATUS.ERROR,
      });
      console.error(err);
    }
  }

  renderTrending() {
    return this.state.trendings.map(trend => (
      <li key={trend.id}>
        <MovieItem movie={trend} />
      </li>
    ));
  }

  render() {
    switch (this.state.fetchStatus) {
      case FETCH_STATUS.LOADING:
        return <p>Loading...</p>;
      case FETCH_STATUS.ERROR:
        return <p>Fetch error.</p>;
      case FETCH_STATUS.SUCCESS:
        return (
          <ul className={styles.TrendingList}>
            {this.renderTrending()}
          </ul>
        );
      default:
        return null;
    }
  }
}

export default TrendingList;