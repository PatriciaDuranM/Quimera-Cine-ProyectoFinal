import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledButton = styled.div`
	display: flex;
	width: 128px;
	height: 48px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	gap: 24px;
	border-radius: 20px;
	background: ${({ color }) => color};
	box-shadow: 4px 4px 4px 0px rgba(15, 3, 33, 0.5);
	color: ${COLORS.principal};
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width>1024px) {
		width: 278px;
		height: 88px;
		font-size: 30px;
	}
`;

export { StyledButton };
