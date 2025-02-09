import { Box } from '@mui/material';
import { FC, useMemo } from 'react';
import { Seat } from '../../../constants/Seat';
import { chooseSeat } from '../../../redux/Cart';
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store';
import { IFlight } from '../../../types/IFlight';
import { ISeat } from '../../../types/ISeat';
import { generatePlaces } from '../../../utils/placeGrid';
import { ColorBox, GridContainer, LegendBox, LegendItem, SeatBox } from './SeatsGridStyles';

interface SeatsGridProps {
	flight: IFlight | undefined;
}

const SeatsGrid: FC<SeatsGridProps> = ({ flight }) => {
	const seats = useMemo(() => generatePlaces(flight), [flight]);
	const { chosenSeats, cart } = useAppSelector((state: RootState) => state.cart);
	const dispatch = useAppDispatch();
	const handleSelectSeat = (seat: ISeat) => {
		if (seat.status == Seat.free) dispatch(chooseSeat(seat));
	};

	const isSelected = (id: string) => {
		const justChosen = chosenSeats.map((seat: ISeat) => seat.id).includes(id);
		const inCart = cart.map(seat => seat.id).includes(id);
		return justChosen || inCart;
	};

	const parseSeatId = (flightId: string) => {
		return flightId.split('/').pop();
	};


	return (
		<Box sx={{ display: 'flex' }}>
			<GridContainer>
				{seats.flat().map((seat: ISeat) => (
					<SeatBox key={seat.id} status={seat.status} selected={isSelected(seat.id)} onClick={() => handleSelectSeat(seat)}>
						{parseSeatId(seat.id)}
					</SeatBox>
				))}
			</GridContainer>

			<LegendBox>
				<LegendItem color='black'>
					<ColorBox color='black' />
					<span>Occupied</span>
				</LegendItem>
				<LegendItem color='white'>
					<ColorBox color='white' />
					<span style={{ color: 'black' }}>Free</span>
				</LegendItem>
				<LegendItem color='gold'>
					<ColorBox color='gold' />
					<span>Chosen</span>
				</LegendItem>
			</LegendBox>
		</Box>
	);
};

export default SeatsGrid;
