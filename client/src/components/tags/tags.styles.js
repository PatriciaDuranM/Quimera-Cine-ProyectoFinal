import styled from 'styled-components';

const StyledAge = styled.span`
	display: flex;
	align-items: center;
	width: ${({ $size }) => $size.width};
	height: ${({ $size }) => $size.height};
	padding-inline: 8px;
	border-radius: 18px;
	background-color: ${({ $color }) => $color};
`;

export { StyledAge };
