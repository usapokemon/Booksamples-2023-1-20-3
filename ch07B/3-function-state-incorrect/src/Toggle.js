import React from 'react';

export default function Toggle () {
  
  const [isToggleOn, setToggle] = React.useState(true);
  
  return (
      // Incorrect Event handling - cannot pass a function call; 
      // should be the definintion or the name of an arrow function
      <button onClick={   setToggle( () => (!isToggleOn)  )   }>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
}
