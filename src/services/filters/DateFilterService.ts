import { IFlight } from '../../types/IFlight';
import IDateFilter from './IDateFilter';

class DateFilterService implements IDateFilter {
	filterByDate(flights: IFlight[], departure?: string, arrival?: string): IFlight[] {
		return flights.filter(flight => {
			const departureDate = new Date(flight.departureTime);
			const arrivalDate = new Date(flight.arrivalTime);

			const departureFilter = departure ? this.sameDate(departureDate, departure) : true;
			const arrivalFilter = arrival ? this.sameDate(arrivalDate, arrival) : true;
			return departureFilter && arrivalFilter;
		});
	}

	private sameDate(date1: Date, date2: string): boolean {
		return date1.toISOString().split('T')[0] === new Date(date2).toISOString().split('T')[0];
	}
}

export default new DateFilterService();
