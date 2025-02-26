import { StyledDiv, StyledText, StyledTitle } from './MovieDescription.styles';

const MovieDescription = ({ title, text }) => {
	return (
		<StyledDiv>
			<StyledTitle>{title + ': '}</StyledTitle>

			<StyledText>{text}</StyledText>
		</StyledDiv>
	);
};

export default MovieDescription;
