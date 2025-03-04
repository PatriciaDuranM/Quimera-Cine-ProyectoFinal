import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledPestañasBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
`;
const StyledPestaña = styled.button`
	width: 50%;
	height: 40px;
	font-family: ${FONT_FAMILY.clashDisplay};
	font-size: 20px;
	border: none;
	font-weight: ${({ $nextMovies, $selected }) =>
		($nextMovies && $selected === 'next') ||
		(!$nextMovies && $selected === 'now')
			? FONT_WEIGHT.semibold
			: FONT_WEIGHT.medium};
	border-bottom: ${({ $nextMovies, $selected }) =>
		($nextMovies && $selected === 'next') ||
		(!$nextMovies && $selected === 'now')
			? `4px solid ${COLORS.neutralCold}`
			: 'none'};
	border-radius: 0px;
	color: ${COLORS.neutralCold};
	background-color: ${({ $nextMovies, $selected }) =>
		($nextMovies && $selected === 'next') ||
		(!$nextMovies && $selected === 'now')
			? COLORS.pink
			: COLORS.desat};

	@media screen and (width>768px) {
		height: 76px;
		font-size: 30px;
		border-bottom: ${({ $nextMovies, $selected }) =>
			($nextMovies && $selected === 'next') ||
			(!$nextMovies && $selected === 'now')
				? `8px solid ${COLORS.neutralCold}`
				: 'none'};
	}
`;

const StyledContainerMoviesBlock = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 16px;
	padding-top: 16px;
	@media screen and (width>768px) {
		gap: 80px;
	}
	@media screen and (width>1024px) {
		gap: 96px;
	}
`;

const StyledContainerMoviesList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	padding-top: 16px;

	@media screen and (width>768px) {
		gap: 44px;
	}
	@media screen and (width>1024px) {
		gap: 80px;
	}
`;

const StyledTitleFilter = styled.span`
	font-size: 20px;
	font-family: ${FONT_FAMILY.clashDisplay};
	font-weight: ${FONT_WEIGHT.medium};
	color: ${COLORS.principal};

	@media screen and (width>768px) {
		font-size: 24px;
	}
`;

const StyledFilterBox = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: flex-start;
	align-items: flex-start;

	@media screen and (width>768px) {
		height: 200px;
	}
	@media screen and (width>1280px) {
		height: 100px;
	}
`;

const StyledAgeBox = styled(StyledFilterBox)`
	height: fit-content;
	@media screen and (width>768px) {
		height: 50px;
	}
`;

const StyledBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
	justify-content: flex-start;
	align-items: flex-start;
`;

const StyledButton = styled.div`
	width: 128px;
	height: 42px;
	padding: 10px;
	align-items: center;
	text-align: center;
	background-color: ${({ $bgColor }) => $bgColor};
	color: ${({ $color }) => $color};
	border-radius: 15px;
	border: none;
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.medium};

	@media screen and (width>768px) {
		width: 188px;
		height: 54px;
		font-size: 24px;
		padding: 12px;
	}
`;
const StyledButtonsBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 28px;
	margin-top: 16px;

	@media screen and (width>768px) {
		justify-content: center;
	}
	@media screen and (width>1280px) {
		gap: 52px;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export {
	StyledContainerMoviesBlock,
	StyledContainerMoviesList,
	StyledTitleFilter,
	StyledFilterBox,
	StyledBox,
	StyledButton,
	StyledButtonsBox,
	StyledAgeBox,
	StyledForm,
	StyledPestañasBox,
	StyledPestaña
};
