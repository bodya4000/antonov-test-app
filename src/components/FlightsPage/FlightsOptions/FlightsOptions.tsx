import { Box } from '@mui/material';
import DateOption from './DateOption';
import PriceOption from './PriceOption';
import SearchOption from './SearchOption';

const FlightsOptions = () => {
	return (
		<Box
			sx={{
				display: 'grid',
				width: '100%',
				gap: theme => theme.spacing(2), // Використовує MUI spacing
				alignItems: 'center',
				gridTemplateColumns: {
					xs: '1fr', // На маленьких екранах - усе в стовпчик
					sm: '1fr 1fr', // Два в рядок
					md: '1fr 1fr', // Середні екрани - рівномірний розподіл
					lg: '2fr 1fr 2fr', // Більше місця для DateOption
				},
			}}
		>
			<SearchOption />
			<PriceOption />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between', // Рівномірно розподіляє DatePickers
					gap: 2, // Додає відступ між DatePickers
					minWidth: '280px', // Мінімальна ширина для нормального вигляду
				}}
			>
				<DateOption />
			</Box>
		</Box>
	);
};

export default FlightsOptions;
