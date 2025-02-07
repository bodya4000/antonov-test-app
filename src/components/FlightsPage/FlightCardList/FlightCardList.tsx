import styled from '@emotion/styled';
import { FC } from 'react';
import FlightCard from './FlightCard';
import useFlights from '../../../hooks/useFlights'

const FlightListContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
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
