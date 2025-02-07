import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;

	@media screen and (width>786px) {
		gap: 20px;
	}
`;

const StyledTittle = styled.h2`
	font-size: 30px;
	font-weight: ${FONT_WEIGHT.medium};
	color: ${COLORS.neutralCold};

	@media screen and (width>786px) {
		font-size: 42px;
	}
`;

const StyledCarrusel = styled.div`
	display: flex;
	flex-direction: row;
	gap: 19px;
	align-items: center;

	@media screen and (width>786px) {
		gap: 56px;
	}
`;

const StyledFilm = styled.img`
	width: 170px;
	height: 233px;
	border-radius: 10px;
	background-color: ${COLORS.orange};

	@media screen and (width>786px) {
		width: 217px;
		height: 326px;
		border-radius: 20px;
	}
`;

const StyledButton = styled.button`
	width: 176px;
	height: 48px;
	margin-top: 20px;
	color: ${COLORS.principal};
	border-radius: 10px;
	background-color: ${COLORS.blue};
	border: none;
	font-size: 22px;
	font-weight: ${FONT_WEIGHT.semibold};
	font-family: ${FONT_FAMILY.clashDisplay};

	@media screen and (width>786px) {
		width: 352px;
		height: 96px;
		font-size: 36px;
	}
`;

export { StyledDiv, StyledTittle, StyledCarrusel, StyledFilm, StyledButton };
