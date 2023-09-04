import React, {Component} from 'react';

export default class TextDisplay extends Component {

    componentDidMount (prevProps, prevState, snapshot) {
        console.log("*** TextDisplay - Inside ComponentDidMount")
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("*** TextDisplay - Inside ComponentDidUpdate")
      }
      
      componentWillUnmount(prevProps, prevState, snapshot) {
        console.log("*** TextDisplay - Inside ComponentWillUnmount")
      }

    render() {
        console.log("inside TextDisplay");
        console.log(this.props.text);
        return (
            <h4 className="bg-primary text-white text-center p-2 m-2">
                 You just entered: {this.props.text}
            </h4>
        )
    }
}