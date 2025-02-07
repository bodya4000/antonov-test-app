import { Box, styled } from '@mui/material';
import { useMemo, useState } from 'react';
import { Seat } from '../../constants/Seat';
import { ISeat } from '../../types/ISeat';
import { generatePlaces } from '../../utils/placeGrid';

const GridContainer = styled(Box)`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-gap: 10px;
	padding: 20px;
	border: 2px solid #000;
	max-width: 800px;
	flex: 1 1 auto;
	border-radius: 12px;
`;

const SeatBox = styled(Box)<{ status: Seat; selected: boolean }>`
	width: 40px;
	height: 40px;
	border: 1px solid #000;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ selected, status }) => (selected ? 'gold' : status === Seat.occupied ? 'black' : 'white')};
	color: ${({ status, selected }) => (selected || status === Seat.occupied ? 'white' : 'black')};
	font-weight: bold;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

const LegendBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	min-width: 300px;
	padding: 20px;
	background: white;
`;

const LegendItem = styled(Box)<{ color: string }>`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 16px;
	font-weight: bold;
`;

const ColorBox = styled(Box)<{ color: string }>`
	width: 40px;
	height: 40px;
	background-color: ${({ color }) => color};
	border: 1px solid black;
`;

const SeatsGrid = () => {
	const seats = useMemo(() => generatePlaces(), []);
	const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

	const handleSelectSeat = (seatId: number) => {
		setSelectedSeat(seatId === selectedSeat ? null : seatId);
	};

	return (
		<Box sx={{ display: 'flex'}}>
			<GridContainer>
				{seats.flat().map((seat: ISeat) => (
					<SeatBox key={seat.id} status={seat.status} selected={seat.id === selectedSeat} onClick={() => handleSelectSeat(seat.id)}>
						{seat.id}
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
