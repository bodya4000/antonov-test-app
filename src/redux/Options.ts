import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionsState {
	searchText: string;

	priceMin: number;
	priceMax: number;
	valueMin: number;
	valueMax: number;

	dateStart: string;
	dateEnd: string | undefined;
}

const initialState: OptionsState = {
	searchText: '',
	priceMin: 0,
	priceMax: 1000,
	valueMin: 0,
	valueMax: 400,

	dateStart: '',
	dateEnd: undefined,
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
	},
});

export const { setSearchText, setPrice, setPriceRange } = counterSlice.actions;
export default counterSlice.reducer;
