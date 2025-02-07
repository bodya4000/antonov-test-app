import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Box, Typography, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFlightById from '../../hooks/useFlightById';
import DateService from '../../utils/date';

const FlightContainer = styled(Box)`

	margin: 0;
	display: block;
	flex-direction: column;
	max-width: 800px;
	padding: 20px;
	border: 2px solid black;
	border-radius: 12px;
	background: white;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const FlightTitle = styled(Typography)`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
	color: #333;
`;

const FlightInfo = styled(Typography)`
	font-size: 16px;
	color: #555;
	margin-bottom: 6px;
`;

const IconWrapper = styled(Box)`
	display: flex;
	gap: 10px;
	margin-bottom: 12px;
`;

const PriceTag = styled(Typography)`
	font-size: 20px;
	font-weight: bold;
	color: #ff9800;
	margin-top: 10px;
`;

const DetailFlightView = () => {
	const { id } = useParams();
	const { data: flight } = useFlightById(id ?? '');

	if (!flight) {
		return (
			<FlightContainer>
				<Typography fontSize={20} fontWeight='bold'>
					Loading flight details...
				</Typography>
			</FlightContainer>
		);
	}

	return (
		<FlightContainer>
			<FlightTitle>
				Flight #{flight.id} - {flight.airline}
			</FlightTitle>

			<IconWrapper>
				<FlightTakeoffIcon sx={{ color: '#007bff' }} />
				<Typography fontSize={18} fontWeight='bold'>
					{flight.from} → {flight.to}
				</Typography>
				<FlightLandIcon sx={{ color: '#ff5722' }} />
			</IconWrapper>

			<FlightInfo>
				<b>Departure:</b> {DateService.toUIFormat(new Date(flight.departureTime))}
			</FlightInfo>
			<FlightInfo>
				<b>Arrival:</b> {DateService.toUIFormat(new Date(flight.arrivalTime))}
			</FlightInfo>

			<FlightInfo>
				<b>Terminal:</b> {flight.terminal}, <b>Gate:</b> {flight.gate}
			</FlightInfo>

			<FlightInfo>
				<b>Duration:</b> {`${DateService.toUIFormat(flight.departureTime)} -  ${DateService.toUIFormat(flight.arrivalTime)}`}
			</FlightInfo>

			<PriceTag>Price: ${flight.price}</PriceTag>

			<FlightInfo>
				<b>Tickets Available:</b> {flight.tickets.remaining} / {flight.tickets.total}
			</FlightInfo>
		</FlightContainer>
	);
};

export default DetailFlightView;
