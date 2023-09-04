
import React from 'react';
import { InputStudentData } from "./features/student/InputStudentData"
import { DisplayStudentData } from "./features/student/DisplayStudentData"
import './App.css';

function App() {
  return (
    <div className="App">
      <InputStudentData />
      <DisplayStudentData />
    </div>
  );
}

export default App;
