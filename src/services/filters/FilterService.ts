import { IFlight } from '../../types/IFlight';
import DateFilterService from './DateFilterService';
import IDateFilter from './IDateFilter';
import IFilter from './IFilter';
import IPriceFilter from './IPriceFilter';
import ISearchFilter from './ISearchFilter';
import PriceFilterService from './PriceFilterService';
import SearchFilterService from './SearchFilterService';

class FilterService implements IFilter {
	private readonly searchFilterService: ISearchFilter;
	private readonly priceFilterService: IPriceFilter;
	private readonly dateFilterService: IDateFilter;

	constructor(searchFilterService: ISearchFilter, priceFilterService: IPriceFilter, dateFilterService: IDateFilter) {
		this.searchFilterService = searchFilterService;
		this.priceFilterService = priceFilterService;
		this.dateFilterService = dateFilterService;
	}
	filterByDate(flights: IFlight[], departure?: string, arrival?: string): IFlight[] {
		return this.dateFilterService.filterByDate(flights, departure, arrival);
	}
	filterByPrice(flights: IFlight[], price: [number, number]): IFlight[] {
		return this.priceFilterService.filterByPrice(flights, price);
	}

	filterBySearchText(flights: IFlight[], searchText: string): IFlight[] {
		return this.searchFilterService.filterBySearchText(flights, searchText);
	}
}

export default new FilterService(SearchFilterService, PriceFilterService, DateFilterService);
