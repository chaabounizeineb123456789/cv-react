import React, { Component } from 'react';
import '../App.css';

//import './App.css';

class Experience extends Component {
  render() {
    return (
		<div className="dateand">
		
			<h6 className="date" style={{paddingRight :"150px" }} >{this.props.date}</h6>
			<div style={{ margin:"0px" }}>
			<h6>{this.props.blablabla1}</h6>
			<p>{this.props.blablabla2}</p>
			<p>{this.props.blablabla3}</p>
			</div>

		</div>
    );
  }
}

export default Experience;