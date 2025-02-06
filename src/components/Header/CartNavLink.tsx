import CartIcon from '../ui/CartIcon';
import NavButton from './NavButton';

import styled from '@emotion/styled';
import { Circle } from '@mui/icons-material';

const CartCountContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
`;

const CartNavLink = () => {
	return (
		<NavButton sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
			<CartCountContainer>
				<Circle sx={{ width: 20, height: 20, color: 'gold', position: 'absolute', right: -10, top: -10 }} />
				<CartIcon />
			</CartCountContainer>
		</NavButton>
	);
};

export default CartNavLink;
