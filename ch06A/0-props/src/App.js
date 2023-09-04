import React, { Component } from 'react';

import './App.css';
import Welcome from './Welcome';
import Comment from './Comment';

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <div>
        <Welcome user="Sam" />
        <Welcome user="Cindy" />
        <Welcome user="Steve" />
      </div>
      <div>
        <Comment note="Sam is young." />
        <Comment note="Cindy works hard." />
        <Comment note="Steve is a good student." />
      </div>
    </div>
    )
  }
}

//export default App;
