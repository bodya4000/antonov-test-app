import { Box, CardContent, Card as MuiCard, styled, Typography } from '@mui/material';
import { memo } from 'react';
import { IFlight } from '../../../types/IFlight';
import DateService from '../../../utils/date';

const Card = styled(MuiCard)`
	flex: 1 1 23%;
	width: 350px;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease-in-out;
	&:hover {
		transform: translateY(-5px);
	}
`;

const FlightTitle = styled(Typography)`
	font-size: 18px;
	font-weight: bold;
	color: #333;
	text-align: center;
	margin-bottom: 8px;
`;

const FlightInfo = styled(Typography)`
	font-size: 14px;
	color: #555;
	margin-bottom: 6px;
`;

const Badge = styled(Box)`
	display: inline-block;
	padding: 4px 8px;
	border-radius: 8px;
	background-color: gold;
	color: black;
	font-weight: bold;
	font-size: 12px;
`;

const FlightCard = memo(
	(flight: IFlight) => {
		return (
			<Card key={flight.id}>
				<CardContent>
					<FlightTitle>{flight.airline}</FlightTitle>
					<FlightInfo>
						<b>From:</b> {flight.from} → <b>To:</b> {flight.to}
					</FlightInfo>
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
						<b>Price:</b> ${flight.price}
					</FlightInfo>
					<FlightInfo>
						<b>Tickets:</b> {flight.tickets.remaining} / {flight.tickets.total}
					</FlightInfo>
					<Badge>Flight ID: {flight.id}</Badge>
				</CardContent>
			</Card>
		);
	},
	(prevProps, newProps) => prevProps.id == newProps.id
);

export default FlightCard;
