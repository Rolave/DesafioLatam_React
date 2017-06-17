import React, { Component } from 'react';
import Checkbox from './Checkbox';
export default class Form extends Component{
	constructor(props){
		super(props)
		this.state = {
			lastName: '',
			lastNameRequired: false,
			loading: false,
			name: '',
			preferences: [],
			nameRequired: false,
			required: false,
			selectedOption: 'Hombre',
			isCheckedRequired: false,
			checkboxMusValue: false,
			checkboxTecValue: false,
			checkboxViaValue: false,
			checkboxGasValue: false,
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
			name: e.target.value.substr(0, 20)
		})
	}
	updateApellido(e){
		this.setState({
			lastName: e.target.value.substr(0, 20)
		})
	}
	selectRadio(e){
		this.setState({
			selectedOption: e.target.value
		})
	}
	updateCheckBox(e){
		const target = e.target
		const checkValue = target.type === 'checkbox' ? target.checked : target.value
		const checkName = target.name
		const prefArray = this.state.preferences
		const delArrayEl = prefArray.indexOf(checkName)
		this.setState({
			[checkName]: checkValue
		})
		target.checked ? prefArray.push(checkName) : prefArray.splice(checkName, 1)
		console.log(prefArray)
	}
	formValidation(){
		this.setState({
			nameRequired: this.state.name === '' ? true : false,
			lastNameRequired: this.state.lastName === '' ? true : false,
			isCheckedRequired: this.state.preferences.length !== 0 ? false : true,
		})
		console.log(this.state.preferences)
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
		if(this.state.name === '' || this.state.lastName === '' || this.state.isCheckedRequired === true){
			return;
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
						<input id="name" placeholder="Nombre" value={this.state.name} onChange={this.updateNombre.bind(this)} type="text" />
						{this.state.nameRequired ? <div className="required">Este campo es requerido</div> : null}
						<input id="lastname" placeholder="Apellido" value={this.state.lastName} onChange={(e) => this.updateApellido(e)} type="text" />
						{this.state.lastNameRequired ? <div className="required">Este campo es requerido</div> : null}
						<div className="block">
							<input type="radio" name="gender" value="Hombre" checked={this.state.selectedOption === 'Hombre'} onChange={(e) => this.selectRadio(e)} /> Hombre<br/>
							<input type="radio" name="gender" value="Mujer" checked={this.state.selectedOption === 'Mujer'} onChange={(e) => this.selectRadio(e)} /> Mujer<br/>
						</div>
						<div className="block">
							<Checkbox name={"checkboxMusValue"} value={"musica"} chanFun={(e) => this.updateCheckBox(e)} checked={this.state.checkboxMusValue} label={"Música"}/>
							<Checkbox name={"checkboxTecValue"} value={"tecnologia"} chanFun={(e) => this.updateCheckBox(e)} checked={this.state.checkboxTecValue} label={"Tecnología"}/>
							<Checkbox name={"checkboxViaValue"} value={"viajes"} chanFun={(e) => this.updateCheckBox(e)} checked={this.state.checkboxViaValue} label={"Viajes"}/>
							<Checkbox name={"checkboxGasValue"} value={"gastronomia"} chanFun={(e) => this.updateCheckBox(e)} checked={this.state.checkboxGasValue} label={"Gastronomía"}/>
						</div>
						{this.state.isCheckedRequired ? <div className="required">Debe seleccionar al menos una opción</div> : null}
						<button className="btn btn-lg btn-block">Enviar</button>
					</form>
					{this.state.loading ? <div>Cargando...</div> : null}
					{this.state.successMessage ? <div className="success-message">Su mensaje ha sido exitosamente enviado</div> : null}
					{this.state.successMessage ? <div><small>{this.state.name + ' ' + this.state.lastName + ', ' + this.state.selectedOption }</small></div> : null}
				</div>
			</div>
		)
	}
}
