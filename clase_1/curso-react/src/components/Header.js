import React, { Component } from 'react';
import logo from '../logo.svg';
export default class Header extends Component {
	render(){
		return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
              <img src={logo} className="App-logo" alt="Brand" />
          </div>
        </div>
      </nav>
		);
	}
}
