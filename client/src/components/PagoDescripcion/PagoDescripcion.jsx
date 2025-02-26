import {
	StyledInfo,
	StyledInfoDiv,
	StyledInfoTitle
} from './PagoDescripcion.styles';

const PagoDescripcion = ({ text, title }) => {
	return (
		<StyledInfoDiv>
			<StyledInfoTitle>{title}</StyledInfoTitle>
			<StyledInfo>{text}</StyledInfo>
		</StyledInfoDiv>
	);
};

export default PagoDescripcion;
