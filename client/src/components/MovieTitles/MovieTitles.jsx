import { StyledTitle } from './MovieTitles.styles';

const MovieTitles = ({ children }) => {
	return (
		<>
			<StyledTitle>{children}</StyledTitle>
		</>
	);
};

export default MovieTitles;
