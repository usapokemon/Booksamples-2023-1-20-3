import './App.css';
import TextList from './TextList';

function App({number}) {
  //const number = props.number;
  return (
    <div>
      <header>
       <title>Learn Props</title>
      </header>
      <TextList number={number} />
    </div>
  );
}
export default App;
