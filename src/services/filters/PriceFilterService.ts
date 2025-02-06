import { IFlight } from '../../types/IFlight';
import IPriceFilter from './IPriceFilter';

class PriceFilterService implements IPriceFilter {
	filterByPrice(flights: IFlight[], price: [number, number]): IFlight[] {
		return flights.filter(flight => {
			return flight.price >= price[0] && flight.price <= price[1];
		});
	}
}

export default new PriceFilterService();
