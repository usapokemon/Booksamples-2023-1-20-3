import React, {Component}  from "react";

export default class Comment extends Component {
   
   render() {
           console.log("Comment: inside render()")
           return (<h1>Hi, {this.props.note}</h1>);
   }
        
 
}

  