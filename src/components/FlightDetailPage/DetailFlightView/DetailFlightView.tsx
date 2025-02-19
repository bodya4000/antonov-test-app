/* eslint-disable @typescript-eslint/no-unused-vars */
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addChosenSeatsToCart, unChooseAll } from '../../../redux/Cart';
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store';
import { IFlight } from '../../../types/IFlight';
import { ISeat } from '../../../types/ISeat';
import { formatDate, formatDetail } from '../../../utils/loadUi';
import AppButton from '../../common/AppButton';
import { FlightContainer, FlightInfo, FlightTitle, IconWrapper, PriceTag } from './DetailFlightViewStyles';

interface DetailFlightViewProps {
	flight: IFlight | undefined;
}

const DetailFlightView: FC<DetailFlightViewProps> = ({ flight }) => {
	const navigate = useNavigate();
	const { chosenSeats } = useAppSelector((state: RootState) => state.cart);
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(unChooseAll());
		};
	}, [dispatch]);

	const addToCartClick = () => {
		dispatch(addChosenSeatsToCart());
		navigate(-1);
	};

	return (
		<FlightContainer>
			<FlightTitle>
				Flight #{formatDetail(flight?.id)} - {formatDetail(flight?.airline)}
			</FlightTitle>

			<IconWrapper>
				<FlightTakeoffIcon sx={{ color: '#007bff' }} />
				<Typography fontSize={18} fontWeight='bold'>
					{formatDetail(flight?.from)} → {formatDetail(flight?.to)}
				</Typography>
				<FlightLandIcon sx={{ color: '#ff5722' }} />
			</IconWrapper>

			<FlightInfo>
				<b>Departure:</b> {formatDate(flight?.departureTime)}
			</FlightInfo>
			<FlightInfo>
				<b>Arrival:</b> {formatDate(flight?.arrivalTime)}
			</FlightInfo>

			<FlightInfo>
				<b>Terminal:</b> {formatDetail(flight?.terminal)}, <b>Gate:</b> {formatDetail(flight?.gate)}
			</FlightInfo>

			<FlightInfo>
				<b>Duration:</b> {formatDate(flight?.departureTime)} - {formatDate(flight?.arrivalTime)}
			</FlightInfo>

			<PriceTag>Price: ${formatDetail(flight?.price)}</PriceTag>
			<PriceTag>Total Price: ${chosenSeats.reduce((accum: number, _: ISeat) => accum + (flight ? flight.price : 0), 0)}</PriceTag>

			<FlightInfo>
				<b>Tickets Available:</b> {formatDetail(flight?.tickets?.remaining)} / {formatDetail(flight?.tickets?.total)}
			</FlightInfo>

			<FlightInfo>
				<b>Count:</b> {chosenSeats.length} <AppButton style={{ marginLeft: 30 }} title='To cart' onClick={addToCartClick} disabled={chosenSeats.length == 0} />
			</FlightInfo>
		</FlightContainer>
	);
};

export default DetailFlightView;
