import { IFlight } from '../../types/IFlight';

export default interface ISearchFilter {
	filterBySearchText(flights: IFlight[], searchText:string): IFlight[];
}
