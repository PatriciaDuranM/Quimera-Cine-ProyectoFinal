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
	height: 264px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-shrink: 0;

	@media screen and (width>786px) {
		height: 340px;
		width: 1198px;
	}
`;

const StyledFilm = styled.img`
	width: 170px;
	height: 233px;
	border-radius: 10px;
	flex-shrink: 0;
	object-fit: cover;

	@media screen and (width>786px) {
		width: 240px;
		height: 320px;
		border-radius: 20px;
	}
`;

export { StyledDiv, StyledTittle, StyledCarrusel, StyledFilm };
