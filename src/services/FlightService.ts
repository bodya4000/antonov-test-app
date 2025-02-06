import axios, { AxiosResponse } from 'axios';
import { IFlight } from '../types/IFlight';

class FlightService {
	private BASE_URL = 'https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights';

	async getFlights(): Promise<AxiosResponse<IFlight[]>> {
		return axios.get<IFlight[]>(this.BASE_URL);
	}

	async getFlightById(id: number): Promise<AxiosResponse<IFlight>> {
		return axios.get<IFlight>(`${this.BASE_URL}/${id}`);
	}
}

export default new FlightService();
