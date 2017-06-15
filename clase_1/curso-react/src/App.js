import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render(){
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Formulario de contacto, creo.</h2>
				</div>
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
			selectedOption: 'hombre',
			isChecked: false,
			isCheckedRequired: false,
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
	selectRadio(e){
		this.setState({
			selectedOption: e.target.value
		})
	}
	updateCheckBox(e){
		this.setState({
			isChecked: e.target.checked
		})
	}
	formValidation(){
		this.setState({
			nameRequired: this.state.name === '' ? true : false,
			lastNameRequired: this.state.lastName === '' ? true : false,
			isCheckedRequired: this.state.isChecked === false ? true : false,
		})
	}
	toggleLoading(){
		this.setState({
			loading: !this.state.loading,
			successMessage: false
		})
	}
	onFormSubmit(e){
		e.preventDefault()
		this.formValidation();
		if(this.state.name === '' || this.state.lastName === '' || this.state.isChecked === false){
			return;
		} else {
		}
		this.toggleLoading()
		setTimeout(function(){
			this.setState({
				loading: false,
				successMessage: true,
			})
		}.bind(this), 1000)
	}
	render(){
		return (
			<div className="container">
				<div className="col-md-4 col-md-offset-4">
					<form onSubmit={(e) => this.onFormSubmit(e)}>
						<input id="name" placeholder="Nombre" onChange={(e) => this.updateNombre(e)} type="text" />
						{this.state.nameRequired ? <div className="required">Este campo es requerido</div> : null}
						<input id="lastname" placeholder="Apellido" onChange={(e) => this.updateApellido(e)} type="text" />
						{this.state.lastNameRequired ? <div className="required">Este campo es requerido</div> : null}
						<div className="block">
							<input type="radio" name="gender" value="hombre" checked={this.state.selectedOption === 'hombre'} onChange={(e) => this.selectRadio(e)} /> Hombre<br/>
							<input type="radio" name="gender" value="mujer" checked={this.state.selectedOption === 'mujer'} onChange={(e) => this.selectRadio(e)} /> Mujer<br/>
						</div>
						<div className="block">
							<input type="checkbox" name="interest" value="musica" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Música<br/>
							<input type="checkbox" name="interest" value="tecnologia" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Tecnología<br/>
							<input type="checkbox" name="interest" value="viajes" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Viajes<br/>
							<input type="checkbox" name="interest" value="gastronomia" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Gastronomía<br/>
						</div>
						{this.state.isCheckedRequired ? <div className="required">Debe seleccionar al menos una opción</div> : null}
						<button>Enviar</button>
					</form>
					{this.state.loading ? <div>Cargando...</div> : null}
					{this.state.successMessage ? <div className="success-message">Su mensaje ha sido exitosamente enviado</div> : null}
					{this.state.successMessage ? <div><small>{this.state.name + ' ' + this.state.lastName}</small></div> : null}
				</div>
			</div>
		)
	}
}

export default App;
