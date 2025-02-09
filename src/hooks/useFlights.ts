import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPriceRange } from '../redux/Options';
import { RootState, useAppDispatch } from '../redux/store';
import FlightPriceService from '../services/FlightPriceService';
import FlightService from '../services/FlightService';
import FilterService from '../services/filters/FilterService';

const useFlights = () => {
	const dispatch = useAppDispatch();
	const searchText = useSelector((state: RootState) => state.options.searchText);
	const valueMin = useSelector((state: RootState) => state.options.valueMin);
	const valueMax = useSelector((state: RootState) => state.options.valueMax);
	const departure = useSelector((state: RootState) => state.options.departure);
	const arrival = useSelector((state: RootState) => state.options.arrival);
	const flightsQueryData = useQuery({
		queryKey: ['flights'],
		queryFn: () => FlightService.getFlights(),
		select: data => {
			let flights = data.data;
			flights = FilterService.filterByPrice(flights, [valueMin, valueMax]);
			flights = FilterService.filterByDate(flights, departure, arrival);
			flights = FilterService.filterBySearchText(flights, searchText);
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
