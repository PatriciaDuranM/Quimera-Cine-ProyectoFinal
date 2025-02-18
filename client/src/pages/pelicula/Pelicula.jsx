import { useParams } from 'react-router-dom';
import ActorCard from '../../components/ActorCard/ActorCard';
import { MOVIES } from '../../constants/movies';
import {
	StyledActorsBox,
	StyledMain,
	StyledMarkIcon,
	StyledMovieBanner,
	StyledTagBox,
	StyledTitle,
	StyledTitleBox
} from './Pelicula.styles';
import Tag from '../../components/tags/Tags';
import { AGE_SIZES, AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import MovieText from '../../components/MovieText/MovieText';
import MovieTitles from '../../components/MovieTitles/MovieTitles';
import MovieDescription from '../../components/MovieDescription/MovieDescription';

const Pelicula = () => {
	const { id } = useParams();
	console.log(id);
	const moviefound = MOVIES.find(movie => movie.id === id);

	return (
		<>
			<StyledMain>
				{/* {moviefound.banners.map(banner => (
					<StyledMovieBanner key={banner} src={banner} />
				))} */}
				<StyledTitleBox>
					<StyledTitle>{moviefound.title}</StyledTitle>
					<StyledMarkIcon src='/assets/images/Icons/GuardarIconOffLight.svg' />
				</StyledTitleBox>
				<StyledTagBox>
					{moviefound.genre_ids.map(genre => (
						<Tag
							key={genre}
							type='genre'
							size={GENRE_TAGS[genre].size.L_MOV}
							values={GENRE_TAGS[genre]}
							position='static'
						></Tag>
					))}

					{/* <Tag
						key={age}
						type='age'
						size={AGE_SIZES[age].size.L_MOV}
						values={AGE_TAGS[age]}
						position='static'
					></Tag>
					 */}
				</StyledTagBox>
				<MovieTitles>Actores:</MovieTitles>
				<StyledActorsBox>
					{moviefound.actors.map(actor => (
						<ActorCard key={actor.name} photo={actor.photo} name={actor.name} />
					))}
				</StyledActorsBox>
				<MovieTitles>Información</MovieTitles>
				<MovieTitles>
					Duración:
					<span>
						<MovieText> {moviefound.duration} mintuos.</MovieText>
					</span>
				</MovieTitles>
				<MovieDescription
					title='Género: '
					text={moviefound.genre_ids}
				></MovieDescription>
				<MovieTitles>Género:</MovieTitles>
				<MovieTitles>Dirección:</MovieTitles>
				<MovieDescription
					title='Dirección: '
					text={moviefound.director}
				></MovieDescription>
				<MovieTitles>Idioma original:</MovieTitles>
				<MovieDescription
					title='Idioma original: '
					text={moviefound.original_language}
				></MovieDescription>

				<MovieTitles>Calificación:</MovieTitles>
				<MovieDescription
					title='Calificación: '
					text={moviefound.age}
				></MovieDescription>
				<MovieTitles>Sinopsis:</MovieTitles>
				<MovieText>{moviefound.overview}</MovieText>
				<MovieTitles>Trailer:</MovieTitles>
			</StyledMain>
		</>
	);
};

export default Pelicula;
