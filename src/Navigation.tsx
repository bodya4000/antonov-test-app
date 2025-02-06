import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightsPage from './app/FlightsPage';

const Navigation: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<FlightsPage />} />
					<Route path='flight/:id' element={<>Detail</>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Navigation;
