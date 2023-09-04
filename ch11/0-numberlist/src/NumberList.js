import React, {Component} from 'react';

export default class NumberList extends  Component{
    render() {
        return (
           <div>
            The number list is {this.props.numberArray.map(n =>
               <div key={n.toString()}>{n}</div>
            )}
            The reverse is {this.props.numberArray.reverse().map(n =>
                <div key={n.toString()}>{n}</div>)}
           </div>
        )
    }
}