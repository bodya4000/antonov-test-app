import DateOption from './DateOption';
import PriceOption from './PriceOption';
import SearchOption from './SearchOption';

const FlightsOptions = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 2fr',
				gap: '16px',
				width: '100%',
				alignItems: 'center',
			}}
		>
			<SearchOption />
			<PriceOption />
			<DateOption />
		</div>
	);
};

export default FlightsOptions;
