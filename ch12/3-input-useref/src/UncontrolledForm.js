import { useRef } from "react";
//import MyDisplay from "./MyDisplay";
//import MyDisplay from './MyDisplay';

// Check the article:
//https://ibaslogic.com/simple-guide-to-react-form/
// An uncontrolled component uses a hook useRef() to access
// a node in a DOM tree directly. 
// But, after the value is inserted into the DOM tree, 
// you don't have a control of the node.


// A controlled component keeps track of the values of 
// props and state. The form input will be stored in the 
// state to be used later. 
const UncontrolledForm = () => {
  let ref = useRef(0);
  var number = 0;

  var handleClick = (e) => {
    ref.current = ref.current + 1;
    number = number + 1;
    alert('You click the submit button ' + ref.current + ' times');
  };
  // Do not add {ref} in render() or return()!!!!
  //
  // cannot add <input type='submit' value={ref}/>
  // cannot add the at the end of return statement.
  //
  // cannot add the following component.
  //  <MyDisplay text={ref.current} />
  return (
    <>
      <h1>Uncontrolled Form</h1>
      
      <input type="button" value="Click Me" onClick={handleClick} />
      
    </>
  );
};

export default UncontrolledForm;
