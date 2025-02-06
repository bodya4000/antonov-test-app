import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CartNavLink from './CartNavLink';
import NavButton from './NavButton';

const Header = () => {
	return (
		<AppBar position='static' sx={{ backgroundColor: 'white', boxShadow: 1, padding: '8px 0', }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'center', gap:5 }}>
				<Typography variant='h6' sx={{ color: 'black' }}>
					Antonov Flights
				</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<NavButton>Home</NavButton>
					<CartNavLink />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
