import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledButaca = styled.img`
	width: 40px;
	height: 40px;

	@media screen and (width>768px) {
		width: 48px;
		height: 48px;
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

const StyledWhiteBox = styled.div`
	background: ${COLORS.neutralWarm};
	display: flex;
	flex-direction: column;
	height: 407px;
	padding: 11px 0px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 0px 0px 10px 10px;
	box-shadow: 6px 6px 6px 0px rgba(19, 6, 39, 0.5);

	@media screen and (width>768px) {
		width: 672px;
		height: 542px;
		flex-shrink: 0;
	}
`;

const StyledPantallaBox = styled.div`
	display: flex;
	height: 53px;
	flex-direction: column;
	align-items: center;
	gap: 3px;
	align-self: stretch;
	margin-inline: auto;

	@media screen and (width>768px) {
		width: 462px;
		height: 74px;
		gap: 8px;
		flex-shrink: 0;
	}
`;

const StyledPantallaText = styled.span`
	color: ${COLORS.principal};
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: ${FONT_WEIGHT.medium};
	line-height: normal;

	@media screen and (width>768px) {
		font-size: 24px;
	}
`;

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 40px) 27px;
	grid-template-rows: repeat(5, 40px) 21px;
`;

const StyledNumberButaca = styled.span`
	color: ${COLORS.principal};
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.regular};
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (width>768px) {
		font-size: 20px;
	}
`;

export {
	StyledButaca,
	StyledTituloDiv,
	StyledWhiteBox,
	StyledPantallaBox,
	StyledPantallaText,
	StyledGrid,
	StyledNumberButaca
};
