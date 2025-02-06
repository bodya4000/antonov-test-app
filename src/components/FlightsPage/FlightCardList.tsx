import styled from '@emotion/styled';
import { FC } from 'react';
import useFlights from '../../hooks/useFlights';
import FlightCard from './FlightCard';

const FlightListContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
`;

const FlightList: FC = () => {
	const { data: flights } = useFlights();

	return (
		<FlightListContainer>
			{flights?.map(flight => (
				<FlightCard key={flight.id} {...flight} />
			))}
		</FlightListContainer>
	);
};

export default FlightList;
