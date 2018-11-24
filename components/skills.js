import React, { Component } from 'react';
import '../App.css';
//import './App.css';

class skills extends Component {
  render() {
    return (
			<div>
			    <p>{this.props.name}</p>
			     <p>{this.props.des1}</p>
			     </div>

    );
  }
}

export default skills;
