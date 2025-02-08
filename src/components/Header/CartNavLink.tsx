import { Box } from '@mui/material';
import { RootState, useAppSelector } from '../../redux/store';
import CartIcon from '../ui/CartIcon';
import NavButton from './NavButton';

import styled from '@emotion/styled';

const CartCountContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
`;

const CartNavLink = () => {
	const { seats } = useAppSelector((state: RootState) => state.cart);
	return (
		<NavButton sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
			<CartCountContainer>
				<Box sx={{ position: 'relative', display: 'inline-block' }}>
					{seats > 0 && (
						<Box
							sx={{
								width: 20,
								height: 20,
								backgroundColor: 'gold',
								color: 'black',
								borderRadius: '50%',
								position: 'absolute',
								right: -30,
								top: -20,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: 14,
								fontWeight: 'bold',
							}}
						>
							{seats}
						</Box>
					)}
				</Box>
				<CartIcon />
			</CartCountContainer>
		</NavButton>
	);
};

export default CartNavLink;
