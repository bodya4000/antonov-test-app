import { Seat } from '../constants/Seat';
import { IFlight } from './IFlight';

export interface ISeat {
	id: string;
	status: Seat;
	flight?: IFlight;
}
