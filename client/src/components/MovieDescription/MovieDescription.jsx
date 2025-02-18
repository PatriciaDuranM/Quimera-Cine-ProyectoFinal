import MovieText from '../MovieText/MovieText';
import MovieTitles from '../MovieTitles/MovieTitles';
import { StyledDiv } from './MovieDescription.styles';

const MovieDescription = ({ title, text }) => {
	return (
		<StyledDiv>
			<MovieTitles>{title}</MovieTitles>
			<MovieText>{text}</MovieText>
		</StyledDiv>
	);
};

export default MovieDescription;
