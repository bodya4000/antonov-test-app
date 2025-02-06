import { FC } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import FlightCardList from '../components/FlightsPage/FlightCardList/FlightCardList';
import FlightsOptions from '../components/FlightsPage/FlightsOptions/FlightsOptions';

interface FlightsPageProps {
	propName?: string;
}

const FlightsPage: FC<FlightsPageProps> = () => {
	return (
		<PageWrapper>
			<FlightsOptions />
			<FlightCardList />
		</PageWrapper>
	);
};

export default FlightsPage;
