import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledCard = styled.div`
	width: 328px;
	height: 152px;
	background-color: ${COLORS.prin100};
	border-radius: 7px;
	display: flex;
	flex-direction: row;
	overflow: hidden;

	@media screen and (width>768px) {
		width: 995px;
		height: 236px;
		border-radius: 20px;
		position: relative;
	}
`;

const StyledMoviePoster = styled.img`
	width: 104px;
	border-radius: 7px, 0px, 0px, 7px;
	height: max-content;

	@media screen and (width>768px) {
		width: 384px;
		border-radius: 20px, 0px, 0px, 20px;
		position: absolute;
		top: -50%;
	}
`;

const StyledTagBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: flex-start;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-inline: 11px;
	padding-block: 16px;

	@media screen and (width>768px) {
		position: absolute;
		left: 420px;
		top: 32px;
		gap: 36px;
	}
`;

const StyledTitle = styled.h3`
	margin: 0px;
	font-size: 16px;
	color: ${COLORS.principal};
	font-weight: ${FONT_WEIGHT.medium};
	text-align: start;

	@media screen and (width>768px) {
		font-size: 28px;
	}
`;
const StyledDuration = styled.span`
	font-size: 14px;
	color: ${COLORS.principal};
	font-weight: ${FONT_WEIGHT.regular};
	text-align: start;

	@media screen and (width>768px) {
		font-size: 22px;
	}
`;

const StyledSaveIconOn = styled.img`
	width: 40px;
	display: ${({ $save }) => ($save ? 'static' : 'none')};

	@media screen and (width>768px) {
		width: 64px;
	}
`;
const StyledSaveIconOff = styled.img`
	width: 40px;
	display: ${({ $save }) => ($save ? 'none' : 'static')};

	@media screen and (width>768px) {
		width: 64px;
	}
`;
const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
const StyledInfoSave = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	@media screen and (width>768px) {
		justify-content: space-between;
		width: 520px;
	}
`;

export {
	StyledCard,
	StyledMoviePoster,
	StyledContainer,
	StyledTagBox,
	StyledTitle,
	StyledDuration,
	StyledSaveIconOn,
	StyledSaveIconOff,
	StyledInfo,
	StyledInfoSave
};
