import { Box, styled } from '@mui/material';
import { Seat } from '../../../constants/Seat';

export const GridContainer = styled(Box)`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-gap: 10px;
	padding: 20px;
	border: 2px solid #000;
	max-width: 800px;
	flex: 1 1 auto;
	border-radius: 12px;
`;

export const SeatBox = styled(Box)<{ status: Seat; selected: boolean }>`
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

export const LegendBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	min-width: 300px;
	padding: 20px;
	background: white;
`;

export const LegendItem = styled(Box)<{ color: string }>`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 16px;
	font-weight: bold;
`;

export const ColorBox = styled(Box)<{ color: string }>`
	width: 40px;
	height: 40px;
	background-color: ${({ color }) => color};
	border: 1px solid black;
`;
