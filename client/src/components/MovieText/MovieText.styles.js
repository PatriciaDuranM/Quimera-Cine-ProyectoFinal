import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledText = styled.p`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.regular};
	margin: 0px;

	@media screen and (width>768px) {
		font-size: 28px;
	}
`;

export { StyledText };
