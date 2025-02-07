import { IFlight } from '../../types/IFlight';

export default interface IDateFilter {
	filterByDate(flights: IFlight[], departure?: string, arrival?: string): IFlight[];
}
