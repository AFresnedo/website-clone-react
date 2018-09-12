import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';

// NOTE: sending userId as a prop but just acknowleding existance, not auth
class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing user='userId' sections={[]}/>
      </div>
    );
  }
}

export default App;
