import React, { Component } from 'react';
import './assets/scss/styles.scss';
import TrendingList from './components/TrendingList';
import { Header, Footer } from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <TrendingList />
        <Footer />
      </div>
    );
  }
}

export default App;
