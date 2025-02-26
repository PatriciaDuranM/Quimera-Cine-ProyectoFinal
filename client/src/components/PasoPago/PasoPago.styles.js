import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledBox = styled.div`
	display: flex;
	width: 82px;
	height: 64px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	flex-shrink: 0;
	background-color: ${COLORS.blue};
	color: ${COLORS.principal};
	/* background-color: ${({ $bgColor }) => ({ $bgColor })};
	color: ${({ $color }) => ({ $color })}; */

	@media screen and (width>1024px) {
		display: flex;
		width: 248px;
		height: 88px;
		gap: 4px;
	}
`;

const StyledTitle = styled.span`
	text-align: center;
	font-family: ${FONT_FAMILY.clashDisplay};
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.bold};

	@media screen and (width>1024px) {
		font-size: 28px;
	}
`;

const StyledText = styled.span`
	text-align: center;
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.regular};

	@media screen and (width>1024px) {
		font-size: 24px;
	}
`;

export { StyledBox, StyledTitle, StyledText };
