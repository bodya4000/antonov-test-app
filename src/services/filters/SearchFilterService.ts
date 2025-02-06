import { IFlight } from '../../types/IFlight';
import ISearchFilter from './ISearchFilter';

class SearchFilterService implements ISearchFilter {
	filterBySearchText(flights: IFlight[], searchText: string): IFlight[] {
		return flights.filter(flight => flight.airline.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
	}
}

export default new SearchFilterService();
