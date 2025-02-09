import { Delete as DeleteIcon } from '@mui/icons-material';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { useMemo } from 'react';
import Badge from '../components/common/Badge';
import PageWrapper from '../components/common/PageWrapper';
import { removeItemById } from '../redux/Cart';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';

const Cart = () => {
	const { cart } = useAppSelector((state: RootState) => state.cart);
	const totalPrice = useMemo(() => cart.reduce((accum, seat) => accum + (seat.flight ? seat.flight.price : 0), 0), [cart]);
	const dispatch = useAppDispatch();
	const handleDelete = (seatId: string) => {
		dispatch(removeItemById(seatId));
	};

	return (
		<PageWrapper>
			<Typography variant='h4' gutterBottom>
				Total Price: ${totalPrice}
			</Typography>

			{cart.length === 0 ? (
				<Typography variant='body1'>No seats selected.</Typography>
			) : (
				<Box display='flex' flexDirection='column' gap={2}>
					{cart.map(seat => (
						<Card key={seat.id} variant='outlined' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<CardContent>
								<Typography variant='h6'>Seat ID: {seat.id}</Typography>
								<Typography>Status: {seat.status}</Typography>
								{seat.flight && (
									<>
										<Typography>Flight: {seat.flight.airline}</Typography>
										<Typography>
											From: {seat.flight.from} → To: {seat.flight.to}
										</Typography>
										<Typography>Departure: {seat.flight.departureTime}</Typography>
										<Typography>Arrival: {seat.flight.arrivalTime}</Typography>
										<Badge>Price: ${seat.flight.price}</Badge>
									</>
								)}
							</CardContent>
							<IconButton onClick={() => handleDelete(seat.id)} sx={{ marginRight: 2 }} aria-label='delete seat'>
								<DeleteIcon color='error' />
							</IconButton>
						</Card>
					))}
				</Box>
			)}
		</PageWrapper>
	);
};

export default Cart;
