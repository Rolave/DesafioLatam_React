import React from 'react';

export default class FormNew extends React.Component{
	render(){
		return (
			<form onSubmit={(e) => this.onFormSubmit(e)}>
				<input id="name" placeholder="Nombre" onChange={(e) => this.updateNombre(e)} type="text" />
				{this.state.nameRequired ? <div className="required">Este campo es requerido</div> : null}
				<input id="lastname" placeholder="Apellido" onChange={(e) => this.updateApellido(e)} type="text" />
				{this.state.lastNameRequired ? <div className="required">Este campo es requerido</div> : null}
				<button className="btn btn-default"  onClick={() => this.toggleLoading()}>Enviar</button>
			</form>
		)
	}
}