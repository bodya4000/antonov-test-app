import { FC } from 'react';
import FlightCardList from '../components/FlightsPage/FlightCardList';
import PageWrapper from '../components/common/PageWrapper';

interface FlightsPageProps {
	propName?: string;
}

const FlightsPage: FC<FlightsPageProps> = () => {
	return (
		<PageWrapper>
			<FlightCardList />
		</PageWrapper>
	);
};

export default FlightsPage;
