import { Button, ButtonProps, styled } from '@mui/material';

const GoldButton = styled(Button)`
	background-color: white;
	color: black;
	border: 2px solid gold;
	padding: 3px 10px;
	border-radius: 8px;
	font-weight: bold;
	text-transform: uppercase;
	transition: all 0.3s ease;

	&:hover {
		background-color: gold;
		color: black;
	}
`;

interface AppButtonProps extends ButtonProps {
	title: string;
}

const AppButton: React.FC<AppButtonProps> = ({ title, ...props }) => {
	return <GoldButton {...props}>{title}</GoldButton>;
};

export default AppButton;
