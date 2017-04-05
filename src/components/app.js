import React, { Component } from 'react';

// App's only job is to show any children component.
// Children component passed up to <App /> and would
// be rendered along with <App />
export default class App extends Component {
  render() {
    return (
      <div>
      	{ this.props.children }
  	  </div>
    );
  }
}
