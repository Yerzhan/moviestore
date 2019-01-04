import React from 'react';
import { FETCH_STATUS } from '../../helpers/common/types';

class TrendingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchStatus: FETCH_STATUS.LOADING,
      movies: [],
    };
  }

  render() {
    switch (this.state.fetchStatus) {
      case FETCH_STATUS.LOADING:
        return <p>Loading...</p>;
      case FETCH_STATUS.ERROR:
        return <p>Fetch error.</p>;
      case FETCH_STATUS.SUCCESS:
        return (
          <ul style={ulStyle}>
            {this.renderItineraries()}
          </ul>
        );
      default:
        return null;
    }
  }
}

export default TrendingList;

const ulStyle = {
  margin: 0,
  listStyleType: 'none',
  paddingInlineStart: 0,
};