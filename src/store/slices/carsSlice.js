import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		data: [],
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload
		},
		addCar(state, action) {
			//Action.payload: {name:'',cost:12323}
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			})
		},
		removeCar(state, action) {
			//action.payload === id of the car we want deleted
			const updated = state.data.filter((car) => {
				return car.id !== action.payload
			})
			state.data = updated
		},
	},
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducers = carsSlice.reducer
