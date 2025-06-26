import { Box } from '@mui/material';
import { FC } from 'react';
import useFlights from '../../../hooks/useFlights';
import FlightCard from './FlightCard';

const FlightList: FC = () => {
	const { data: flights } = useFlights();
	return (
		<Box
			sx={{
				maxWidth: '1300px',
				margin: '0 auto',
				display: 'flex',
				flexWrap: 'wrap',
				gap: {
					xs: '2px',
					sm: '5px',
					md: '10px',
					lg: '20px',
				},
			}}
		>
			{flights?.map(flight => (
				<FlightCard key={flight.id} {...flight} />
			))}
		</Box>
	);
};

export default FlightList;
