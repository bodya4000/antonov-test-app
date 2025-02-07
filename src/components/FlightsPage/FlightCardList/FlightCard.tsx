import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, CardContent, IconButton, Card as MuiCard, styled, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IFlight } from '../../../types/IFlight';
import DateService from '../../../utils/date';

const Card = styled(MuiCard)`
	flex: 1 1 23%;
	width: 350px;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease-in-out;
	position: relative;
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

const FavoriteButton = styled(IconButton)`
	position: absolute;
	top: 8px;
	right: 8px;
`;

const FlightCard = memo(
	(flight: IFlight) => {
		const navigate = useNavigate();
		const [favorited, setFavorited] = useState(false);

		const toggleFavorite = () => {
			setFavorited(prev => !prev);
		};

		const onCardClick = () => {
			navigate('flight/' + flight.id);
		};

		return (
			<Card onClick={onCardClick}>
				<CardContent>
					<FavoriteButton onClick={toggleFavorite} aria-label='add to favorites'>
						{favorited ? <StarIcon sx={{ color: 'gold' }} /> : <StarBorderIcon sx={{ color: 'gold' }} />}
					</FavoriteButton>

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
	(prevProps, newProps) => prevProps.id === newProps.id
);

export default FlightCard;
