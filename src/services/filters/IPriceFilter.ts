import { IFlight } from '../../types/IFlight';

export default interface IPriceFilter {
	filterByPrice(flights: IFlight[], price: [number, number]): IFlight[];
}
