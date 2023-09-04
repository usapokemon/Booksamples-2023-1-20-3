
import './App.css';
import Mailbox from './Mailbox';

const messages = ['message 1', 'message 2', 'message 3', 'message4', 'message5'];
//const message = [];
function App() {
  return (
    <div className="App">

     <Mailbox unreadMessages= { messages } /> 
      
    </div>
  );
}

export default App;
