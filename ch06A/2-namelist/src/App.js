import './App.css';
import NameList from './NameList';

function App() {

  const nameArray = ['John', 'Mary', 'Steve'];

  return (
    <div>

      {
        nameArray.map( (name) =>
            <NameList name={name} key={name}/>
        )
      }

    </div>
  );
}
export default App;
