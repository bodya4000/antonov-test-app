import { IFlight } from '../../types/IFlight';
import IFilter from './IFilter';
import ISearchFilter from './ISearchFilter';
import SearchFilterService from './SearchFilterService';

class FilterService implements IFilter {
	private readonly searchFilterService: ISearchFilter;

	constructor(searchFilterService: ISearchFilter) {
		this.searchFilterService = searchFilterService;
	}

	filterBySearchText(flights: IFlight[], searchText: string): IFlight[] {
		return this.searchFilterService.filterBySearchText(flights, searchText);
	}
}

export default new FilterService(SearchFilterService);
