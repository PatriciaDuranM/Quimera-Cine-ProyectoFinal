import { Link, useParams } from 'react-router-dom';
import ActorCard from '../../components/ActorCard/ActorCard';
import '@justinribeiro/lite-youtube';
import { MOVIES } from '../../constants/movies';
import {
	StyledActorsBox,
	StyledBack,
	StyledBannerBox,
	StyledInfoBox,
	StyledMain,
	StyledMarkIcon,
	StyledMovieBanner,
	StyledTagBox,
	StyledTitle,
	StyledTitleBox,
	StyledTrailer
} from './Pelicula.styles';
import Tag from '../../components/tags/Tags';
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import MovieText from '../../components/MovieText/MovieText';
import MovieTitles from '../../components/MovieTitles/MovieTitles';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
// import { StyledWeek } from '../../components/diasSemana/DiaSemana.styles';
// import DiaSemana from '../../components/diasSemana/DiaSemana';
// import { semana } from '../../constants/days';
// import { useState } from 'react';

const Pelicula = () => {
	const { id } = useParams();
	console.log(id);
	const moviefound = MOVIES.find(movie => movie.id === id);
	// const commingSoon = PROXIMAMENTE.includes(moviefound);
	const date = new Date();
	console.log(date);
	// const [selectedDay, setSelectedDay] = useState();

	return (
		<>
			{/* {moviefound.banners.map(banner => (
					<StyledMovieBanner key={banner} src={banners} />
				))} */}
			<StyledBannerBox>
				<StyledMovieBanner src={moviefound.banners[0]}></StyledMovieBanner>
				<Link to='/cartelera'>
					<StyledBack $position='absolute'>
						<img
							src='/assets/images/Icons/BackLightIcon.svg'
							alt='Volver atrás'
						/>
					</StyledBack>
				</Link>
			</StyledBannerBox>
			<StyledMain>
				<StyledTitleBox>
					<StyledTitle>{moviefound.title}</StyledTitle>
					<StyledMarkIcon src='/assets/images/Icons/GuardarOffLight.png' />
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

					<Tag
						key={moviefound.age}
						type='age'
						size={AGE_TAGS[moviefound.age].size.L_MOV}
						values={AGE_TAGS[moviefound.age]}
						position='static'
					></Tag>
				</StyledTagBox>
				{/* <StyledWeek>
					<DiaSemana />
				</StyledWeek> 

				<Link to={`/pago/${moviefound.id}`}>
					{!commingSoon &&
						moviefound.horario.map(movieInfo =>
							movieInfo.hours.map(hour => <button key={hour}>{hour}</button>)
						)}
					{commingSoon && <h4>Estreno:</h4>}
				</Link>*/}
				<MovieTitles>Información</MovieTitles>
				<StyledInfoBox>
					<MovieDescription
						title='Duración '
						text={moviefound.duration + ' minutos.'}
					></MovieDescription>
					<MovieDescription
						title='Género '
						text={moviefound.genero.join(', ') + '.'}
					></MovieDescription>
					<MovieDescription
						title='Dirección '
						text={moviefound.director + '.'}
					></MovieDescription>
					<MovieDescription
						title='Idioma original '
						text={moviefound.original_language + '.'}
					></MovieDescription>
					<MovieDescription
						title='Calificación '
						text={'No recomendada para menores de ' + moviefound.age + '.'}
					></MovieDescription>
				</StyledInfoBox>
				<MovieTitles>Actores:</MovieTitles>
				<StyledActorsBox>
					{moviefound.actors.map(actor => (
						<ActorCard key={actor.name} photo={actor.photo} name={actor.name} />
					))}
				</StyledActorsBox>

				<MovieTitles>Sinopsis:</MovieTitles>
				<MovieText>{moviefound.overview}</MovieText>
				<MovieTitles>Trailer:</MovieTitles>
				<StyledTrailer>
					<lite-youtube videoid={moviefound.video.slice(-11)}></lite-youtube>
				</StyledTrailer>
			</StyledMain>
		</>
	);
};

export default Pelicula;
