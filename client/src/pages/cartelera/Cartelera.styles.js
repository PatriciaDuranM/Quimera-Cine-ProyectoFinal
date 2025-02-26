import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

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
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
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
	StyledForm
};
