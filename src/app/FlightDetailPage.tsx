import PageWrapper from '../components/common/PageWrapper';
import DetailFlightView from '../components/FlightDetailPage/DetailFlightView';
import SeatsGrid from '../components/FlightDetailPage/SeatsGrid';

const FlightDetailPage = () => {
	return (
		<PageWrapper>
			<SeatsGrid />
			<DetailFlightView />
		</PageWrapper>
	);
};

export default FlightDetailPage;
