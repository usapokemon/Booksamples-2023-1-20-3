import React, {Component} from 'react';
/*
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
*/


export default class Toggle extends Component {

  render() {
    return (
      <h4>
          The value= {this.props.value ? 'TRUE': 'FALSE'}
      </h4>
    );
  }
}
/*
ReactDOM.render(
  <Toggle />,
  document.getElementById('roots')
);
*/