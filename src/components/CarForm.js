import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeCost, changeName } from '../store'

function CarForm() {
	const dispath = useDispatch()
	const { name, cost } = useSelector((state) => {
		return {
			name: state.form.name,
			cost: state.form.cost,
		}
	})

	const handleNameChange = (event) => {
		dispath(changeName(event.target.value))
	}
	const handleCostChange = (event) => {
		const carCost = parseInt(event.target.value) || 0
		dispath(changeCost(carCost))
	}
	const handleClick = () => {}
	const handleSubmit = (event) => {
		event.preventDefault()
		dispath(addCar({ name, cost }))
	}
	return (
		<div className="car-form panel">
			<h4 className="subtitle">Add Car</h4>
			<form onSubmit={handleSubmit}>
				<div className="field-group">
					<div className="field">
						<label className="label">Name:</label>
						<input className="input is-expanded" value={name} onChange={handleNameChange}></input>
					</div>
				</div>
				<div className="field-group">
					<div className="field">
						<label className="label">Cost:</label>
						<input type="number" className="input is-expanded" value={cost || ''} onChange={handleCostChange}></input>
					</div>
				</div>
				<div className="field">
					<button className="button is-primary" onClick={handleClick}>
						Submit!
					</button>
				</div>
			</form>
		</div>
	)
}
export default CarForm
