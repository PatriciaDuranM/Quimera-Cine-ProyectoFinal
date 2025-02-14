import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	padding-inline: 16px;
	@media screen and (width>768px) {
		padding-inline: 140px;
	}
`;

const StyledMovieBanner = styled.img`
	width: 100%;
	height: 50%;
`;

const StyledTitle = styled.h2`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.medium};
	font-family: ${FONT_FAMILY.clashDisplay};
	@media screen and (width>768px) {
		font-size: 48px;
	}
`;
const StyledTitleBox = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledMarkIcon = styled.img`
	width: 48px;
	@media screen and (width>768px) {
		width: 96px;
	}
`;

const StyledTagBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	flex-wrap: wrap;
`;

const StyledAffinity = styled.img`
	width: 41px;
`;

const StyledAffinityText = styled.span`
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.semibold};
`;

const StyledActorsBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: flex-start;
`;

export {
	StyledMovieBanner,
	StyledTitle,
	StyledTitleBox,
	StyledMarkIcon,
	StyledTagBox,
	StyledMain,
	StyledAffinity,
	StyledAffinityText,
	StyledActorsBox
};
