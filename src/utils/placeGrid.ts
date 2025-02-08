import { Seat } from '../constants/Seat';
import { ISeat } from '../types/ISeat';

export const generatePlaces = (flightId: string) => {
	let idCounter = 1;
	const seats: ISeat[][] = [];
	for (let i = 1; i <= 6; i++) {
		const iRow = [];
		for (let j = 1; j <= 10; j++) {
			const randBool = Math.random() > 0.5;
			const seat: ISeat = {
				id: flightId + '/' + idCounter++,
				status: randBool ? Seat.occupied : Seat.free,
			};
			iRow.push(seat);
		}
		seats.push(iRow);
	}
	return seats;
};
