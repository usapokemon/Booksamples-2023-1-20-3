import React, {Component} from 'react';

export default  class  Welcome extends Component {

    constructor(props) {
            super(props);
            console.log('Welcome: inside the constructor')
            this.state = {
                    name: ""
            }
            
    }    /*
    const newName = this.props.name + 'test';
    this.setState({name: newName});*/
    
    render() {
          console.log("here in Welcome");
          return (<h1>Hi, {this.props.user}</h1>);  
    }
        
  
}


 