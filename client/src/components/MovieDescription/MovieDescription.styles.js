import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 8px;
`;

const StyledText = styled.p`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.regular};
	margin: 0px;

	@media screen and (width >768px) {
		font-size: 28px;
	}
`;
const StyledTitle = styled.span`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width >768px) {
		font-size: 28px;
	}
`;

export { StyledDiv, StyledText, StyledTitle };
