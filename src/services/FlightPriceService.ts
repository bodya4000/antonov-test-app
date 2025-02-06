import { IFlight } from '../types/IFlight';

export default class FlightPriceService {
	private static getMinPrice(flights: IFlight[]): number {
		return Math.min(...flights.map(flight => flight.price));
	}

	private static getMaxPrice(flights: IFlight[]): number {
		return Math.max(...flights.map(flight => flight.price));
	}

	static getPriceRange(flights: IFlight[]): [number, number] {
		return [this.getMinPrice(flights), this.getMaxPrice(flights)];
	}
}
