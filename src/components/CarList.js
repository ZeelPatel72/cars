import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store'
function CarList() {
	const dispatch = useDispatch()
	const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
		const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
		return {
			cars: filteredCars,
			name: form.name,
		}
		//why cars.cars? state: big state object// first cars: key of cars//second cars: cars initial state has cars[]
	})
	const handleCarDelete = (car) => {
		dispatch(removeCar(car.id))
		console.log(car)
	}
	const renderedCars = cars.map((car) => {
		const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
		//to decide oif the car should be bold:
		//state.form.name === car.name
		return (
			<div key={car.id} className={`panel ${bold && 'bold'}`}>
				<p>
					{car.name} - ${car.cost}
				</p>
				<button className="button is-danger" onClick={() => handleCarDelete(car)}>
					Delete
				</button>
			</div>
		)
	})
	return (
		<div className="car-list">
			{renderedCars}
			<hr />
		</div>
	)
}
export default CarList
