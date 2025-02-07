import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
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
`;

const StyledFilm = styled.img`
	width: 170px;
	height: 233px;
	border-radius: 10px;
	background-color: ${COLORS.blue};

	@media screen and (width>786px) {
		width: 240px;
		height: 320px;
		border-radius: 20px;
	}
`;

export { StyledDiv, StyledTittle, StyledCarrusel, StyledFilm };
