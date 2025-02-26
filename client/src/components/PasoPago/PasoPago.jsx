import { StyledBox, StyledText, StyledTitle } from './PasoPago.styles';

const PasoPago = ({ title, text, color, bgColor }) => {
	return (
		<StyledBox $color={color} $bgColor={bgColor}>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
		</StyledBox>
	);
};

export default PasoPago;
