import MyDisplay from './MyDisplay'
import { useState } from 'react';

export default function App() {
  var [value, setValue] = useState('1');

  return (
    <>
      <div >
        <form className="w-25 p-1" >
          <div className="form-group p-1">
          <label forhtml="selectOption ">Select Option Number</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => setValue(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
      </div>
      <MyDisplay number={value}/>
    </>

  );
}

