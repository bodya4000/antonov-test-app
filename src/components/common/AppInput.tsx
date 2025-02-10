import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import { FC, InputHTMLAttributes } from 'react';

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const InputWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const StyledInput = styled.input`
	position: relative;
	top: 2px;
	width: 100%;
	height: 50px;
	padding: 15px 40px 20px 12px;
	border: 2px solid #ccc;
	border-radius: 8px;
	font-size: 16px;
	outline: none;
	transition: border 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);

	&:focus {
		border-color: #007bff;
		box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.2);
	}

	&:hover {
		border-color: #888;
	}
`;

const SearchIcon = styled(Search)`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
	color: #888;
	pointer-events: none;
`;

const AppInput: FC<AppInputProps> = ({ ...props }) => {
	return (
		<InputWrapper>
			<StyledInput {...props} />
			<SearchIcon />
		</InputWrapper>
	);
};

export default AppInput;
