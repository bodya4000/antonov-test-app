import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISeat } from '../types/ISeat';

interface CartState {
	chosenSeats: ISeat[];
	cart: ISeat[];
	seats: number;
}

export const loadState = () => {
	try {
		const savedState = localStorage.getItem('cartState');
		return savedState ? JSON.parse(savedState) : { cart: [], seats: 0 };
	} catch (error) {
		console.error('Error loading cart state:', error);
		return { cart: [], seats: 0 };
	}
};

const initialState: CartState = {
	chosenSeats: [],
	...loadState(),
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		chooseSeat(state, action: PayloadAction<ISeat>) {
			state.chosenSeats.push(action.payload);
		},

		unChooseSeat(state, action: PayloadAction<ISeat>) {
			state.chosenSeats.filter(seat => seat.id !== action.payload.id);
		},

		unChooseAll(state) {
			state.chosenSeats = [];
		},

		addChosenSeatsToCart(state) {
			state.cart = [...state.cart, ...state.chosenSeats];
			state.seats += state.chosenSeats?.length || 0;

			const serializedState = JSON.stringify({ seats: state.seats, cart: state.cart });
			localStorage.setItem('cartState', serializedState);

			state.chosenSeats = [];
		},
		removeItemById(state, action: PayloadAction<string>) {
			state.cart = state.cart.filter(seat => seat.id != action.payload);
			state.seats -= 1;
		},
	},
});

export const { chooseSeat, addChosenSeatsToCart, unChooseSeat, unChooseAll, removeItemById } = cartSlice.actions;
export default cartSlice.reducer;
