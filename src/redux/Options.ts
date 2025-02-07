import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionsState {
	searchText: string;

	priceMin: number;
	priceMax: number;
	valueMin: number;
	valueMax: number;

	departure: string | undefined;
	arrival: string | undefined;
}

const initialState: OptionsState = {
	searchText: '',
	priceMin: 0,
	priceMax: 1000,
	valueMin: 0,
	valueMax: 400,

	departure: undefined,
	arrival: undefined,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setSearchText(state, action: PayloadAction<string>) {
			state.searchText = action.payload;
		},
		setPrice(state, action: PayloadAction<number[]>) {
			state.valueMin = action.payload[0];
			state.valueMax = action.payload[1];
		},
		setPriceRange(state, action: PayloadAction<number[]>) {
			state.priceMin = action.payload[0];
			state.priceMax = action.payload[1];
		},
		setDeparture(state, action: PayloadAction<string>) {
			state.departure = action.payload;
		},
		setArrival(state, action: PayloadAction<string>) {
			state.arrival = action.payload;
		},
	},
});

export const { setSearchText, setPrice, setPriceRange, setDeparture, setArrival } = counterSlice.actions;
export default counterSlice.reducer;
