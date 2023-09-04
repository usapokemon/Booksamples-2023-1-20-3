import React, {Component} from 'react';

//import Form from 'react-bootstrap/Form';

export default class Search extends Component {
constructor(props) {
super(props);
this.handleTookChange = this.handleTookChange.bind(this);
}
handleTookChange(e) {
this.props.onTookChange(e.target.checked);
}

render() {

return (
<form className='bg-primary p-2 m-4'>
<input
type="checkbox"
checked={this.props.tookOnly} 
onChange={this.handleTookChange}
/>
{' '}
Only show courses took already
</form>
);
}
}
