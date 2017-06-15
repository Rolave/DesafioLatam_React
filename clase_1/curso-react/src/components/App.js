import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render(){
		return (
			<div className="App">
				<Formulario />
			</div>
		);
	}
}

class Formulario extends Component{
	constructor(props){
		super(props);
		this.state = {
			lastName: '',
			lastNameRequired: false,
			loading: false,
			name: '',
			nameRequired: false,
			required: false,
			successMessage: false,
		}
	}
	getInitialState(){
		return{
			user: {}
		}
	}
	updateNombre(e){
		this.setState({
			name: e.target.value,
		})
	}
	updateApellido(e){
		this.setState({
			lastName: e.target.value,
		})
	}
	formValidation(){
		new Promise ( (resolve, reject) =>
			this.state.name !== '' ? this.setState({nameRequired: false}) : this.setState({nameRequired: true}) )
	}
	onFormSubmit(e){
		e.preventDefault()
		this.formValidation()
		setTimeout(function(){
			this.setState({
				loading: false,
				successMessage: true,
			})
		}.bind(this), 1000)
	}
	toggleLoading(){
		this.setState({
			loading: !this.state.loading,
			successMessage: false
		})
	}
	render(){
		return (
			<div className="container">
				<div className="col-md-4 col-md-offset-4">
					<FormNew />
					{this.state.loading ? <div>Cargando...</div> : null}
					{this.state.successMessage ? <div className="btn-success">Su mensaje ha sido exitosamente enviado</div> : null}
					{this.state.successMessage ? <div><p>{this.state.name + ' ' + this.state.lastName}</p></div> : null}
				</div>
			</div>
		)
	}
}

export default App;
