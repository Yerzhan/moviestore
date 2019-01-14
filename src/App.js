import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/styles.scss';
import TrendingList from './components/TrendingList';
import { Header, Footer } from './components/Layout';

const About = () => <h2>About</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          
          <Route path='/' exact component={TrendingList} />
          <Route path='/about' component={About} />
  
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
