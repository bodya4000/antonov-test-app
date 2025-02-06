import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { FC } from 'react';

interface AppSliderProps {
	minPrice?: number;
	maxPrice?: number;
	step?: number;
	onChange?: (_event: React.SyntheticEvent | Event, value: number | number[]) => void;
	value: number[];
}

const StyledSlider = styled(Slider)`
	color: #007bff;
	height: 6px;
	width: 300px;

	& .MuiSlider-thumb {
		width: 20px;
		height: 20px;
		background-color: white;
		border: 2px solid #007bff;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	}

	& .MuiSlider-rail {
		opacity: 0.3;
	}

	& .MuiSlider-track {
		height: 6px;
	}
`;

const AppSlider: FC<AppSliderProps> = ({ minPrice = 0, maxPrice = 1000, step = 10, onChange, value }) => {
	return <StyledSlider value={value} min={minPrice} max={maxPrice} step={step} onChange={onChange} valueLabelDisplay='auto' />;
};

export default AppSlider;
