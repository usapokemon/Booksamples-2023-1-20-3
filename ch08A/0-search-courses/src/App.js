import './App.css';
import React, { Component } from 'react';
import FilterTable from './FilterTable';
import Search from './Search';
import { COURSES } from './FilterTable';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tookOnly: false
    };
    this.handleTookChange = this.handleTookChange.bind(this);
  }

  handleTookChange(tookOnly) {
    this.setState({
      tookOnly: tookOnly
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Search tookOnly={this.state.tookOnly}
            onTookChange={this.handleTookChange} />
        </div>
        <div>
          <FilterTable courses={COURSES}
            tookOnly={this.state.tookOnly}
          />
        </div>
      </div>
    );
  }
}

export default App;

