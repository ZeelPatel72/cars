import { formReducers } from './slices/formSlice'
import { carsReducers } from './slices/carsSlice'
import { configureStore } from '@reduxjs/toolkit'
import { changeName, changeCost } from './slices/formSlice'
import { addCar, removeCar, changeSearchTerm } from './slices/carsSlice'

const store = configureStore({
	reducer: {
		cars: carsReducers,
		form: formReducers,
	},
})

export { store }
export { changeName, changeCost }
export { addCar, removeCar, changeSearchTerm }
