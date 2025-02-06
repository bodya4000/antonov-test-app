import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setPriceRange } from '../redux/Options';
import { useAppDispatch } from '../redux/store';
import FilterService from '../services/filters/FilterService';
import FlightPriceService from '../services/FlightPriceService';
import FlightService from '../services/FlightService';
import useOptionsSelector from './useOptionsSelector';

const useFlights = () => {
	const dispatch = useAppDispatch();
	const { searchText, valueMin, valueMax } = useOptionsSelector();

	const flightsQueryData = useQuery({
		queryKey: ['flights'],
		queryFn: () => FlightService.getFlights(),
		select: data => {
			let flights = data.data;
			flights = FilterService.filterByPrice(flights, [valueMin, valueMax]);
			flights = FilterService.filterBySearchText(flights, searchText);
			console.log(valueMin, valueMax);
			return flights;
		},
	});

	useEffect(() => {
		if (flightsQueryData.data) {
			dispatch(setPriceRange(FlightPriceService.getPriceRange(flightsQueryData.data)));
		}
	}, [flightsQueryData.data, dispatch]);

	return flightsQueryData;
};

export default useFlights;
