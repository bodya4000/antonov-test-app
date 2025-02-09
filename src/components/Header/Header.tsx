import { AppBar, Toolbar, Typography } from '@mui/material';
import CartNavLink from './CartNavLink';
import NavButton from './NavButton';

const Header = () => {
	return (
		<AppBar position='static' sx={{ backgroundColor: 'white', boxShadow: 1, padding: '8px 0' }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
				<NavButton href='/'>
					<Typography variant='h6' sx={{ color: 'black' }}>
						Antonov Flights
					</Typography>
				</NavButton>
				<CartNavLink />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
