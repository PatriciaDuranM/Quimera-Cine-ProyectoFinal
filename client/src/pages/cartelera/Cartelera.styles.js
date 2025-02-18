import styled from 'styled-components';

const StyledContainerMoviesBlock = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 16px;
	padding: 16px;

	@media screen and (width>768px) {
		padding: 122px;
		gap: 80px;
	}
	@media screen and (width>1024px) {
		padding: 140px;
		gap: 96px;
	}
`;

const StyledContainerMoviesList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	padding: 16px;

	@media screen and (width>768px) {
		padding: 122px;
		gap: 44px;
	}
	@media screen and (width>1024px) {
		padding: 140px;
		gap: 80px;
	}
`;

export { StyledContainerMoviesBlock, StyledContainerMoviesList };
