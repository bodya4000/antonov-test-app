import { useQuery } from '@tanstack/react-query';
import FlightService from '../services/FlightService';

const useFlights = () => {
	const flightsQueryData = useQuery({
		queryKey: ['flights'],
		select: data => data.data,
		queryFn: () => FlightService.getFlights(),
	});

	return flightsQueryData;
};

export default useFlights;
