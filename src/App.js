import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {
	return (
		<div className="container is-fluid">
			<div>
				<CarForm />
			</div>
			<div>
				<CarSearch />
			</div>
			<div>
				<CarList />
			</div>
			<div>
				<CarValue />
			</div>
		</div>
	)
}
export default App
