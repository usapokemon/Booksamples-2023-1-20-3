import React, {Component} from 'react';

//import Form from 'react-bootstrap/Form';


export default class Search extends Component {
  
  
  
  render() {

    return (

      <form className='bg-primary p-2 m-4'>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.coursePrefix} 
          onChange={this.props.onChangeCoursePrefix}/>

          
      </form>
    );
  }
       
    
}

