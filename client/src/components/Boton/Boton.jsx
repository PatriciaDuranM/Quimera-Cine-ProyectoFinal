import { StyledButton } from './Boton.styles';

const Boton = ({ text, color }) => {
	return <StyledButton color={color}>{text}</StyledButton>;
};

export default Boton;
