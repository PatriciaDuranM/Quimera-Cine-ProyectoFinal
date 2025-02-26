import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledTitle = styled.span`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width>768px) {
		font-size: 28px;
	}
`;

export { StyledTitle };
