
import './App.css';
import NumberList from './NumberList';

function App() {
  const number = [1,2,3,4,5];
  return (
    <div>
      <header>
       <title>Learn list</title>
      </header>
      <NumberList numberArray={number} />
    </div>
  );
}

export default App;
