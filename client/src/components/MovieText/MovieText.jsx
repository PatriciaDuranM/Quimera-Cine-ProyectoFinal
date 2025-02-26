import { StyledText } from './MovieText.styles';

const MovieText = ({ children }) => {
	console.log(children);
	return (
		<>
			<StyledText>{children}</StyledText>
		</>
	);
};

export default MovieText;
