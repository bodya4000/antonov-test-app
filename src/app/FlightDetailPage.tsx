import { useParams } from 'react-router-dom'
import PageWrapper from '../components/common/PageWrapper';
import DetailFlightView from '../components/FlightDetailPage/DetailFlightView/DetailFlightView';
import SeatsGrid from '../components/FlightDetailPage/SeatsGrid/SeatsGrid';
import useFlightById from '../hooks/useFlightById'

const FlightDetailPage = () => {
	const { id } = useParams();
	const { data: flight } = useFlightById(id ?? '');

	return (
		<PageWrapper>
			<SeatsGrid flight={flight}/>
			<DetailFlightView flight={flight}/>
		</PageWrapper>
	);
};

export default FlightDetailPage;
