import { Box, debounce, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { setPrice } from '../../../redux/Options';
import { useAppDispatch } from '../../../redux/store';
import AppSlider from '../../common/AppSlider';

const PriceOption = () => {
	const [localValue, setLocalValue] = useState([250, 300]);
	const dispatch = useAppDispatch();

	const debouncedDispatch = useMemo(
		() =>
			debounce((value: number[]) => {
				dispatch(setPrice(value));
			}, 500),
		[dispatch]
	);

	useEffect(() => {
		debouncedDispatch(localValue);
	}, [localValue, debouncedDispatch]);

	const handleChange = (_event: Event | React.SyntheticEvent, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			setLocalValue(newValue);
		}
	};

	return (
		<Box sx={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
			<Typography variant='h6' sx={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>
				Price Range
			</Typography>
			<AppSlider onChange={handleChange} value={[localValue[0], localValue[1]]} step={10} minPrice={100} maxPrice={300} />
			<Typography variant='body1' sx={{ marginTop: '10px', color: '#555' }}>
				${localValue[0]} - ${localValue[1]}
			</Typography>
		</Box>
	);
};

export default PriceOption;
