import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightDetailPage from './app/FlightDetailPage';
import FlightsPage from './app/FlightsPage';

const Navigation: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<FlightsPage />} />
					<Route path='flight/:id' element={<FlightDetailPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Navigation;
