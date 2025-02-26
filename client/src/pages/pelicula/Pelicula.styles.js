import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	padding-inline: 16px;
	gap: 16px;
	padding-bottom: 64px;
	padding-top: 26px;

	@media screen and (width>768px) {
		padding-inline: 120px;
		padding-top: 40px;
		gap: 24px;
		padding-bottom: 120px;
	}
	@media screen and (width>1024px) {
		padding-inline: 140px;
		padding-top: 76px;
		gap: 24px;
		padding-bottom: 120px;
	}
`;

const StyledWeek = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 4px;

	@media screen and (width>786px) {
		gap: 20px;
	}
`;

const StyledInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	@media screen and (width>768px) {
		gap: 6px;
	}
`;

const StyledMovieBanner = styled.img`
	width: 100%;
	height: 50%;
`;
const StyledBannerBox = styled.div`
	position: relative;
`;

const StyledBack = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	background-color: ${COLORS.prin300};
	border-radius: 10px;
	top: 24px;
	left: 16px;
	position: ${({ $position }) => $position};
	@media screen and (width>768px) {
		top: 40px;
		left: 40px;
	}
	@media screen and (width>1024px) {
		width: 64px;
		height: 64px;
		top: 64px;
		left: 120px;
	}
`;

const StyledTitle = styled.h2`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.medium};
	font-family: ${FONT_FAMILY.clashDisplay};
	margin: 0px;

	@media screen and (width>768px) {
		font-size: 48px;
	}
`;
const StyledTitleBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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
	overflow-x: auto;
`;
const StyledTrailer = styled.div`
	width: 100%;
	margin-inline: auto;
	border-radius: 20px;
	overflow: hidden;

	@media screen and (width>1400px) {
		width: 790px;
		aspect-ratio: 16/9;
	}
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
	StyledActorsBox,
	StyledTrailer,
	StyledInfoBox,
	StyledBack,
	StyledBannerBox,
	StyledWeek
};

//PERSONALIZAR BARRA SCROLL
//  const StyledActorsBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 16px;
//   justify-content: flex-start;
//   overflow-x: auto;
//   &::-webkit-scrollbar {
//     height: 8px; /* Altura del scroll horizontal */
//   }
//   &::-webkit-scrollbar-track {
//     background: #f0f0f0; /* Color del fondo del scroll */
//     border-radius: 4px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #888; /* Color del scroll */
//     border-radius: 4px;
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background: #555; /* Color del scroll al pasar el cursor */
//   }
// `;
