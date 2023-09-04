import React, {Component} from 'react';

export default class Toggle extends Component {

  render() {
    return (
      <h4>
          The value= {this.props.value ? 'TRUE': 'FALSE'}
      </h4>
    )
  }
}
