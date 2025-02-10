import styled from '@emotion/styled';

const PageWrapper = styled.main`
	max-width: 1300px;
	margin: 0 auto;
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 787px) {
		padding: 20px;
	}

	@media (max-width: 480px) {
		padding: 5px;
	}
`;

export default PageWrapper;
