	<div className="block">
		<input type="checkbox" name="interest" value="musica" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Música<br/>
		<input type="checkbox" name="interest" value="tecnologia" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Tecnología<br/>
		<input type="checkbox" name="interest" value="viajes" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Viajes<br/>
		<input type="checkbox" name="interest" value="gastronomia" onChange={(e) => this.updateCheckBox(e)} checked={this.state.isChecked} /> Gastronomía<br/>
	</div>

			checkboxMusValue: false,
			checkboxTecValue: false,
			checkboxViaValue: false,
			checkboxGasValue: false,


			isCheckedRequired: this.checkboxMusValue || this.checkboxTecValue || this.checkboxViaValue || this.checkboxGasValue ? true : false,
