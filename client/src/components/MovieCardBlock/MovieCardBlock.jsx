import { Link } from 'react-router-dom';
import { MOVIE_GENRES } from '../../constants/movie-genre';
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import Tag from '../tags/Tags';
import {
	StyledBookIcon,
	StyledCardBox,
	StyledImg,
	StyledImgContainer,
	StyledMovieGenre,
	StyledMovieInfo,
	StyledMovieTittle
} from './MovieCardBlock.styles';

const MovieCardBlock = ({ title, poster_path, genre_ids, id }) => {
	const genre = genre_ids[0];

	return (
		<Link to={`/pelicula/${id}`}>
			<StyledCardBox>
				<StyledImgContainer>
					<Tag
						type='genre'
						size={GENRE_TAGS[genre].size.L_MOV}
						values={GENRE_TAGS[genre]}
						position='absolute'
					></Tag>
					<StyledBookIcon src='/assets/images/Icons/GuardarOffLight.png' />
					<StyledImg
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
					/>
				</StyledImgContainer>
				<StyledMovieInfo>
					<StyledMovieTittle>{title}</StyledMovieTittle>
					<StyledMovieGenre>{GENRE_TAGS[genre].text}</StyledMovieGenre>
				</StyledMovieInfo>
			</StyledCardBox>
		</Link>
	);
};

export default MovieCardBlock;
