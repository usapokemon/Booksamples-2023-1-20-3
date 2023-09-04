import React from 'react';

export default function TextDisplay( {text, name})  { 
  console.log("inside TextDisplay");
  console.log(text);
  console.log(name);
  return (
      <h4 className="bg-primary text-white text-center p-2 m-2">
            Hello {name} <br/>
            You just entered: {text}
      </h4>
  )
    
}