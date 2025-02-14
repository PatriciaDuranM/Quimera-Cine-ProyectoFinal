import { useEffect, useState } from 'react';
import DiasSemana from '../../components/diasSemana/DiasSemana';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MovieCardList from '../../components/MovieCardList/MovieCardList';
import Tag from '../../components/tags/Tags';
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import { MOVIES } from '../../constants/movies';
import { StyledContainerMoviesBlock } from './Cartelera.styles';
import ActorCard from '../../components/ActorCard/ActorCard';

const API_KEY = '516800ef8302f7e2f4b5b52959005cf6';
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

const Cartelera = () => {
	const [movies, setMovies] = useState();
	console.log(movies);
	useEffect(() => {
		getNowPlayingMovies(setMovies);
	}, []);

	return (
		<>
			<DiasSemana />
			<FilterButtons></FilterButtons>
			<StyledContainerMoviesBlock>
				{MOVIES.map(movie => (
					<MovieCardList key={movie.id} {...movie} />
				))}

				{/* <Tag type='age' size={AGE_TAGS[16].S_MOV} values={AGE_TAGS[16]}></Tag>
			<Tag
				type='genre'
				size={GENRE_TAGS.biografia.size.M_MOV}
				values={GENRE_TAGS.biografia}
			></Tag> */}
			</StyledContainerMoviesBlock>
		</>
	);
};

export default Cartelera;

const getNowPlayingMovies = async setBillboard => {
	const res = await fetch(url, { cache: 'no-store' });

	const data = await res.json();

	setBillboard(data.results);
};
