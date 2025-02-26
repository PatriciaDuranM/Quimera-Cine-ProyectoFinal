import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledButacaCSS = styled.div`
	width: 22px;
	height: 20px;
	border-radius: 6px 6px 0px 0px;
	border: 3px solid ${COLORS.principal};
	background-image: ${({ $accBut }) =>
		$accBut ? 'url(/assets/images/Icons/LikeIconOffDark.svg)' : 'none'};
	background-size: cover;

	@media screen {
		width: 32px;
		height: 30px;
		flex-shrink: 0;
	}
`;

export { StyledButacaCSS };
