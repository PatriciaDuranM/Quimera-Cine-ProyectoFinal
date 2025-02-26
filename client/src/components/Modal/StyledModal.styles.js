import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledBg = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: rgba(35, 11, 74, 0.5);
`;

const StyledVentana = styled.div`
	display: flex;
	width: 328px;
	height: fit-content;
	padding: 20px 12px 40px 16px;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	flex-shrink: 0;
	border-radius: 10px;
	background: ${COLORS.prin100};
	box-shadow: 8px 8px 8px 0px rgba(14, 3, 31, 0.5);
	position: relative;

	@media screen and (width> 768px) {
		width: 740px;
		padding-inline: 36px;
		padding-block: 40px;
	}
	@media screen and (width> 1024px) {
		width: 1000px;
		padding-inline: 36px;
	}
	@media screen and (width> 1280px) {
		width: 1200px;
		padding-inline: 36px;
	}
`;

const StyledClose = styled.img`
	width: 40px;
	height: 40px;
	position: absolute;
	right: 20px;
	top: 20px;
	cursor: pointer;
`;

export { StyledVentana, StyledBg, StyledClose };
