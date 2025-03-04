import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledFooter = styled.footer`
	width: 100%;
	height: fit-content;
	padding-block: 32px;
	padding-inline: 16px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	justify-content: space-between;
	align-items: center;
	background-color: ${COLORS.pink};
	margin-top: auto;

	@media screen and (width>786px) {
		height: 160px;
		flex-direction: row;
		padding-inline: 48px;
	}
`;

const StyledLogo = styled.img`
	width: fit-content;
`;

const StyledOptionsBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media screen and (width>786px) {
		flex-direction: row;
		gap: 40px;
	}
`;

const StyledOption = styled.span`
	color: white;
	font-size: 20px;
	font-family: ${FONT_FAMILY.clashGrotesk};
	font-weight: ${FONT_WEIGHT.medium};

	@media screen and (width>786px) {
		font-size: 20px;
	}
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

const StyledRRSSBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;
`;
const StyledRRSSIcon = styled.img`
	width: fit-content;
`;
const StyledFollow = styled.span`
	color: white;
	font-size: 20px;
	font-family: ${FONT_FAMILY.clashGrotesk};
	font-weight: ${FONT_WEIGHT.medium};
	@media screen and (width>786px) {
		font-size: 24px;
	}
`;

export {
	StyledFooter,
	StyledLogo,
	StyledOptionsBox,
	StyledOption,
	StyledBox,
	StyledRRSSBox,
	StyledRRSSIcon,
	StyledFollow
};
