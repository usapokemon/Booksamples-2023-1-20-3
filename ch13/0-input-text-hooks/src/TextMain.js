import React, {useState} from "react";
import TextInput from "./TextInput";
import TextDisplay from "./TextDisplay";

export default  function  TextMain () {
  
  const [myText, setText] = useState('');
      
  const handleTextChange = (text) => {
    setText(text.slice());
  }
  
    console.log("Inside main -- pass 1 --" + myText);
    return (
      <div>
        <TextInput
          text={myText}
          onFilterTextChange={handleTextChange}
        />
        <TextDisplay
          text={myText}
          
        />
      </div>
    );
  
}



