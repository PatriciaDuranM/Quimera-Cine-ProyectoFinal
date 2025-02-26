import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledWeek = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 4px;

	@media screen and (width>786px) {
		gap: 20px;
	}
`;

const StyledDay = styled.div`
	width: 72px;
	height: 52px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-inline: 8px;
	background-color: ${({ $selectedDay }) =>
		$selectedDay === true ? `${COLORS.pink}` : `${COLORS.neutralWarm}`};
	color: ${({ $selectedDay }) =>
		$selectedDay === true ? '#F3F3F3' : `${COLORS.principal}`};
	border-bottom: ${({ $selectedDay }) =>
		$selectedDay === true ? `4px solid ${COLORS.neutralWarm}` : 'none'};

	@media screen and (width>786px) {
		width: 110px;
		height: 108px;
		padding: 14px;
		gap: 5px;
		border-bottom: ${({ $selectedDay }) =>
			$selectedDay === true ? `9px solid ${COLORS.neutralWarm}` : 'none'};
	}
`;

const StyledH2 = styled.span`
	font-family: ${FONT_FAMILY.clashDisplay};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: 20px;
	text-align: center;

	@media screen and (width>786px) {
		font-size: 35px;
	}
`;
const StyledH3 = styled.span`
	font-weight: ${FONT_WEIGHT.regular};
	font-size: 16px;
	text-align: center;

	@media screen and (width>786px) {
		font-size: 25px;
	}
`;

export { StyledDay, StyledH2, StyledH3, StyledWeek };
