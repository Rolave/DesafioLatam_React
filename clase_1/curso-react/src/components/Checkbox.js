import React, { Component } from 'react';
export default class Checkbox extends Component {
	render(){
		return (
      <div>
        <input type="checkbox"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.chanFun}
          checked={this.props.checkSt}/>
        &nbsp;
        {this.props.label}
      </div>
		);
	}
}
