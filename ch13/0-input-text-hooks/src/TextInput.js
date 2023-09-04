import React  from 'react';


export default  function TextInput ({text, onFilterTextChange}) {
  
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value)
  }
  
  console.log("Inside TextInput");
  return (
    <form>
      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleFilterTextChange}
        />
    </form>
  );
}
  
  