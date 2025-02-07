import { useQuery } from '@tanstack/react-query';
import FlightService from '../services/FlightService';

const useFlightById = (id: string) => {
	const flightData = useQuery({
		queryKey: ['flights', id],
		queryFn: () => FlightService.getFlightById(id),
		select: data => data.data,
	});
	return flightData;
};

export default useFlightById;
