import { IFlight } from '../../types/IFlight';
import IFilter from './IFilter';
import IPriceFilter from './IPriceFilter';
import ISearchFilter from './ISearchFilter';
import PriceFilterService from './PriceFilterService';
import SearchFilterService from './SearchFilterService';

class FilterService implements IFilter {
	private readonly searchFilterService: ISearchFilter;
	private readonly priceFilterService: IPriceFilter;

	constructor(searchFilterService: ISearchFilter, priceFilterService: IPriceFilter) {
		this.searchFilterService = searchFilterService;
		this.priceFilterService = priceFilterService;
	}
	filterByPrice(flights: IFlight[], price: [number, number]): IFlight[] {
		return this.priceFilterService.filterByPrice(flights, price);
	}

	filterBySearchText(flights: IFlight[], searchText: string): IFlight[] {
		return this.searchFilterService.filterBySearchText(flights, searchText);
	}
}

export default new FilterService(SearchFilterService, PriceFilterService);
