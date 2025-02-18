import { StyledText } from './MovieText.styles';

const MovieText = ({ children }) => {
	return (
		<>
			<StyledText>{children}</StyledText>
		</>
	);
};

export default MovieText;
