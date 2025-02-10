import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import useOptionsSelector from '../../../hooks/useOptionsSelector';
import { setArrival, setDeparture } from '../../../redux/Options';
import { useAppDispatch } from '../../../redux/store';

export default function DateOption() {
	const dispatch = useAppDispatch();
	const { departure, arrival } = useOptionsSelector();

	const departureTransformed = useMemo(() => (departure ? dayjs(new Date(departure)) : dayjs()), [departure]);
	const arrivalTransformed = useMemo(() => (arrival ? dayjs(new Date(arrival)) : departureTransformed), [arrival, departureTransformed]);

	const handleDepartureChange = (value: dayjs.Dayjs | null) => {
		if (value) {
			if (value > arrivalTransformed) {
				dispatch(setArrival(value.toDate().toISOString()));
			}
			dispatch(setDeparture(value.toDate().toISOString()));
		}
	};

	const handleArrivalChange = (value: dayjs.Dayjs | null) => {
		if (value) {
			dispatch(setArrival(value.toDate().toISOString()));
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div style={{ height: 48, display: 'flex', justifyContent: 'flex-start', gap: '16px', width: '100%' }}>
				<DatePicker sx={{ flex: 1 }} minDate={dayjs()} label='Departure' value={departureTransformed} onChange={handleDepartureChange} />
				<DatePicker sx={{ flex: 1 }} minDate={departureTransformed} label='Arrival' value={arrivalTransformed} onChange={handleArrivalChange} />
			</div>
		</LocalizationProvider>
	);
}
