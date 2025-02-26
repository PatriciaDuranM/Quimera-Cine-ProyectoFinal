import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledInfoTitle = styled.span`
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.medium};
	line-height: normal;
	letter-spacing: 0.54px;
`;

const StyledInfo = styled.span`
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.semibold};
	line-height: normal;
	letter-spacing: 0.54px;
`;

const StyledInfoDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 4px;
	align-items: center;
`;

export { StyledInfoTitle, StyledInfo, StyledInfoDiv };
