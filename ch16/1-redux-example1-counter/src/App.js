
import React from 'react';
import { Counter } from './features/counter/Counter';
import { Credit } from './features/credit/Credit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Credit />
    </div>
  );
}

export default App;
