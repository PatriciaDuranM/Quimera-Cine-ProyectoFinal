import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	@media screen and (width>768px) {
		gap: 12px;
	}
`;

const StyledImg = styled.img`
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 50%;
	object-position: top;

	@media screen and (width>768px) {
		width: 120px;
		height: 120px;
	}
`;
const StyledName = styled.span`
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.regular};
	text-align: center;
`;

export { StyledCard, StyledImg, StyledName };
