import React from 'react';

export default function Toggle () {
  
  const [isToggleOn, setToggle] = React.useState(true);
  
  return (
      // must change the following to 
       //<button onClick={    () => setToggle(!isToggleOn) } > 
       <button onClick={    setToggle(!isToggleOn)     }>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
}
