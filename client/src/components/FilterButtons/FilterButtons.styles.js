import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledFiltersBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	width: fit-content;
	align-items: flex-start;
`;

const StyledFilter = styled.button`
	width: 70px;
	height: 38px;
	background-color: ${COLORS.pink};
	color: ${COLORS.principal};
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.medium};
	padding-inline: 10px;
	padding-block: 8px;
	text-align: center;
	border-radius: 15px;
	border: none;

	@media screen and (width>768px) {
		width: 188px;
		height: 52px;
	}
`;

const StyledList = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ $list }) =>
		$list ? COLORS.blue : COLORS.neutralCold};
	border: none;
	border-radius: 15px;

	@media screen and (width>768px) {
		width: 52px;
		height: 52px;
	}
`;

const StyledBlock = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ $list }) =>
		$list ? COLORS.neutralCold : COLORS.blue};
	border: none;
	border-radius: 15px;
	@media screen and (width>768px) {
		width: 52px;
		height: 52px;
	}
`;

export { StyledFilter, StyledFiltersBox, StyledList, StyledBlock };
