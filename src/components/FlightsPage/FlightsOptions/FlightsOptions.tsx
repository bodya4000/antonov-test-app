import PriceOption from './PriceOption';
import SearchOption from './SearchOption';

const FlightsOptions = () => {
	return (
		<div style={{ width: '100%', display: 'flex', gap: 20, alignItems: 'center' }}>
			<SearchOption />
			<PriceOption />
		</div>
	);
};

export default FlightsOptions;
