import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledPasosBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1px;
`;

const StyledBotonesBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin-inline: auto;
	gap: 52px;

	@media screen and (width>1024px) {
		gap: 136px;
		width: 994px;
	}
`;

const StyledInfoBox = styled.div`
	display: flex;
	width: 328px;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: 10px;
	box-shadow: 4px 4px 4px 0px rgba(21, 6, 62, 0.5);
	border-radius: 10px;
	background-color: rgba(165, 140, 207, 0.3);

	@media screen and (width>768px) {
		width: 995px;
		padding-block: 36px;
		padding-inline: 56px;
	}
`;

const StyledMovieTitle = styled.span`
	font-size: 24px;
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width>768px) {
		font-size: 32px;
	}
`;

const StyledTituloDiv = styled.div`
	width: 328px;
	height: 50px;
	display: flex;
	height: 50px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border-radius: 10px 10px 0px 0px;
	background-color: ${COLORS.blue};
	color: ${COLORS.principal};

	@media screen and (width>768px) {
		width: 672px;
		height: 66px;
	}
`;

export {
	StyledPasosBox,
	StyledMovieTitle,
	StyledBotonesBox,
	StyledInfoBox,
	StyledTituloDiv
};
