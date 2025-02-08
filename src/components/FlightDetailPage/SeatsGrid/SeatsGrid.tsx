import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Seat } from '../../../constants/Seat';
import { chooseSeat } from '../../../redux/Cart';
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store';
import { ISeat } from '../../../types/ISeat';
import { generatePlaces } from '../../../utils/placeGrid';
import { ColorBox, GridContainer, LegendBox, LegendItem, SeatBox } from './SeatsGridStyles';

const SeatsGrid = () => {
	const { id } = useParams();
	const seats = useMemo(() => generatePlaces(id ?? ''), [id]);
	const { chosenSeats } = useAppSelector((state: RootState) => state.cart);
	const dispatch = useAppDispatch();
	const handleSelectSeat = (seat: ISeat) => {
		if (seat.status == Seat.free) dispatch(chooseSeat(seat));
	};

	const isSelected = (id: string) => {
		return chosenSeats.map((flight: ISeat) => flight.id).includes(id);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<GridContainer>
				{seats.flat().map((seat: ISeat) => (
					<SeatBox key={seat.id} status={seat.status} selected={isSelected(seat.id)} onClick={() => handleSelectSeat(seat)}>
						{seat.id.split('/').pop()}
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
