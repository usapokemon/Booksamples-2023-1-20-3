import "./styles.css";
import MyInput from './MyInput';
import MyDisplay from './MyDisplay';
import { useRef, useState } from 'react';

export default function App() {

  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  var handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>Please enter a course title in Computer Science
      <br />
      <MyInput ref={inputRef}
        onChange={handleChange}
        value={value} />
      <MyDisplay text={value} />
    </>

  )

}
