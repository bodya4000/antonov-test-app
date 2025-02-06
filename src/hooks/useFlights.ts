import { useQuery } from '@tanstack/react-query';
import FilterService from '../services/filters/FilterService';
import FlightService from '../services/FlightService';
import useOptionsSelector from './useDebouncedOptionsSelector'

const useFlights = () => {
	const { searchText } = useOptionsSelector();
	const flightsQueryData = useQuery({
		queryKey: ['flights'],
		select: data => {
			return FilterService.filterBySearchText(data.data, searchText);
		},
		queryFn: () => FlightService.getFlights(),
	});

	return flightsQueryData;
};

export default useFlights;
