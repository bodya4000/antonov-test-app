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

const Container = styled.div`
	border: 2px solid #ccc;
	padding: 5px 0;
	border-radius: 5px;
	height: 50px;
`;

const StyledSlider = styled(Slider)`
	position: relative;
	top: 2px;
	color: rgb(48, 52, 55);
	height: 6px;
	width: 300px;
	margin: 0 20px;
	& .MuiSlider-thumb {
		width: 20px;
		height: 20px;
		background-color: white;
		border: 2px solid rgb(0, 0, 0);
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
	return (
		<Container>
			<StyledSlider value={value} min={minPrice} max={maxPrice} step={step} onChange={onChange} valueLabelDisplay='auto' />
		</Container>
	);
};

export default AppSlider;
