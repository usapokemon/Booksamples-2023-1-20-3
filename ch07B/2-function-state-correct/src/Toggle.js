import React from 'react';

export default function Toggle () {
  
  const [isToggleOn, setToggle] = React.useState(true);
  
  return (
      <button onClick={    () => setToggle(!isToggleOn)     }>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
}
