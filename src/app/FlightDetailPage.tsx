import PageWrapper from '../components/common/PageWrapper';
import DetailFlightView from '../components/FlightDetailPage/DetailFlightView/DetailFlightView';
import SeatsGrid from '../components/FlightDetailPage/SeatsGrid/SeatsGrid';

const FlightDetailPage = () => {
	return (
		<PageWrapper>
			<SeatsGrid />
			<DetailFlightView />
		</PageWrapper>
	);
};

export default FlightDetailPage;
