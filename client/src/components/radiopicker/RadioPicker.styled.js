import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 6px;
	align-items: center;
`;

const StyledLabel = styled.label`
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.principal};
	@media screen and (width>768px) {
		font-size: 22px;
	}
`;

const StyledRadioButton = styled.input`
	scale: 1.4;
	accent-color: ${COLORS.principal};
	appearance: none;

	&::before {
		content: '';
		display: inline-flex;
		width: 38px;
		height: 38px;
		background-image: url('/assets/images/Icons/radioButtoff.svg');
	}

	&:checked::before {
		background-image: url('/assets/images/Icons/radioButton.svg');
	}
	&:checked + ${StyledLabel} {
		font-weight: ${FONT_WEIGHT.medium};
	}
`;

export { StyledDiv, StyledRadioButton, StyledLabel };
