import React, { Component } from 'react';
import './App.css';
import TrendingList from './components/TrendingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TrendingList />
        </header>
      </div>
    );
  }
}

export default App;
