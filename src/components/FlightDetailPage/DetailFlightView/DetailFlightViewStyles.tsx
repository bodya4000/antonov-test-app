import { Box, Typography, styled } from '@mui/material';

export const FlightContainer = styled(Box)`
	margin: 0;
	display: block;
	flex-direction: column;
	padding: 20px;
	border: 2px solid black;
	border-radius: 12px;
	background: white;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const FlightTitle = styled(Typography)`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
	color: #333;
`;

export const FlightInfo = styled(Typography)`
	font-size: 16px;
	color: #555;
	margin-bottom: 6px;
`;

export const IconWrapper = styled(Box)`
	display: flex;
	gap: 10px;
	margin-bottom: 12px;
`;

export const PriceTag = styled(Typography)`
	font-size: 20px;
	font-weight: bold;
	color: #ff9800;
	margin-top: 10px;
`;
