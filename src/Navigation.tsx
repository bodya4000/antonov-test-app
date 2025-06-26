import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './app/Cart';
import FlightDetailPage from './app/FlightDetailPage';
import FlightsPage from './app/FlightsPage';

const Navigation: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<FlightsPage />} />
					<Route path='flight/:id' element={<FlightDetailPage />}></Route>
					<Route path='cart' element={<Cart />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Navigation;
