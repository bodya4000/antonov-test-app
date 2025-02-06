import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionsState {
	searchText: string;
	priceMin: number;
	priceMax: number;
	dateStart: Date;
	dateEnd: Date | undefined;
}

const initialState: OptionsState = {
	searchText: '',
	priceMin: 0,
	priceMax: 100,

	dateStart: new Date(),
	dateEnd: undefined,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setSearchText(state, action: PayloadAction<string>) {
			state.searchText = action.payload;
		},
	},
});

export const { setSearchText } = counterSlice.actions;
export default counterSlice.reducer;
