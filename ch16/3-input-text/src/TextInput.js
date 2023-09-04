import React from 'react';


export default function TextInput({name, text, 
  onFilterNameChange, onFilterTextChange}) {
  
  const handleFilterTextChange = (e) => {
    console.log ('handleFilterTextChange ' + e.target.value);
    onFilterTextChange(e.target.value)
  }
  const handleFilterNameChange = (e) => {
    console.log('handleFilterNameChange' + e.target.value);
    onFilterNameChange(e.target.value)
  }
  
  console.log("Inside TextInput");
  return (
    <form className="bg-primary text-white text-center p-2 m-2">
      Please enter one line of text <br/>
      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleFilterTextChange}
        />
        <br/>
      Please enter your name <br/>
      <input
        type="name"
        placeholder="Enter name..."
        value={name}
        onChange={handleFilterNameChange}
        />
    </form>
    );
 
  }
  