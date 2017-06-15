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
			selectedOption: 'Hombre',
			isChecked: false,
			isCheckedRequired: false,
			preferences: [
				{
					id: 1,
					checkboxName: 'Música',
					checkboxDefaultValue: false
				},
				{
					id: 2,
					checkboxName: 'Tecnología',
					checkboxDefaultValue: false
				},
				{
					id: 3,
					checkboxName: 'Viajes',
					checkboxDefaultValue: false
				},
				{
					id: 4,
					checkboxName: 'Gastronomía',
					checkboxDefaultValue: false
				},
			],
			successMessage: false,
		}
	}

						<div className="block">
							{this.state.preferences.map(x => <div key={x.id}><input id={x.id - 1} type="checkbox" name="interest" value={x.checkboxName} checked={x.checkboxDefaultValue} onChange={(e) => this.updateCheckBox(e)} /> {x.checkboxName}</div>)}
						</div>