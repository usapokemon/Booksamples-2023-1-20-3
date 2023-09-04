import React from "react";
import {useReducer} from 'react';
import TextInput from "./TextInput";
import TextDisplay from "./TextDisplay";

export default function TextMain () {
  const [{filterName, filterText}, dispatch] = 
  useReducer( reducer, {filterName: "", filterText: ""});

  
  function reducer (state, action) {
    console.log('In TextMain - reducer');
    switch ( action.type ) {
      case "changeText":
        console.log('type: changeText '+action.value);
        return {...state, filterText: action.value};
      case "changeName":
        console.log('type:changeName '+action.value);
        return {...state, filterName: action.value};
      default:
        throw new Error(`${action.type} is invalid`)
    }
  }
  function handleTextChange(text) {
    console.log('++ Inside TextMain - handleTextChange' );
    dispatch({
      type: 'changeText',
      value: text,
    });
  }
  function handleNameChange(name) {
    console.log('++ Inside TextMain - handleNameChange' );
    dispatch({
      type: 'changeName',
      value: name,
    });
  }
 
console.log("Inside main");
return (
  <div>
    <TextInput
      text={filterText}
      name={filterName}
      onFilterNameChange={handleNameChange}
      onFilterTextChange={handleTextChange}
    />
    
  
    <TextDisplay
      text={filterText}
      name={filterName} 
    />
  </div>
);
 
}



