import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledTag = styled.span`
	display: flex;
	align-items: center;
	height: ${({ $size }) => $size.height};
	padding: 8px;
	border-radius: 18px;
	background-color: ${({ $color }) => $color};
	font-size: ${({ $size }) => $size.fontSize};
	font-weight: ${({ $size }) => $size.fontWeight};
	color: ${COLORS.principal};
	position: ${({ $position }) => $position};
`;

const StyledAge = styled(StyledTag)`
	width: ${({ $size }) => $size.width};
`;

const StyledGenre = styled(StyledTag)`
	width: fit-content;
	top: 8px;
	left: 8px;
`;

export { StyledAge, StyledGenre };
