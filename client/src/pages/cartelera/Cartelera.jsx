import { useEffect, useState } from 'react';
import DiasSemana from '../../components/diasSemana/DiasSemana';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MovieCardList from '../../components/MovieCardList/MovieCardList';
import Tag from '../../components/tags/Tags';
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import { MOVIES } from '../../constants/movies';
import {
	StyledContainerMoviesBlock,
	StyledContainerMoviesList
} from './Cartelera.styles';

import MovieCardBlock from '../../components/MovieCardBlock/MovieCardBlock';

const API_KEY = '516800ef8302f7e2f4b5b52959005cf6';
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

const Cartelera = () => {
	const [movies, setMovies] = useState();
	console.log(movies);
	const [list, setList] = useState(false);
	useEffect(() => {
		getNowPlayingMovies(setMovies);
	}, []);

	return (
		<>
			<DiasSemana />
			<FilterButtons list={list} setList={setList}></FilterButtons>
			{list === false && (
				<StyledContainerMoviesBlock>
					{MOVIES.map(movie => (
						<MovieCardBlock key={movie.id} {...movie} />
					))}
				</StyledContainerMoviesBlock>
			)}

			{list === true && (
				<StyledContainerMoviesList>
					{MOVIES.map(movie => (
						<MovieCardList key={movie.id} {...movie} />
					))}
				</StyledContainerMoviesList>
			)}

			{/* <Tag type='age' size={AGE_TAGS[16].S_MOV} values={AGE_TAGS[16]}></Tag>
			<Tag
				type='genre'
				size={GENRE_TAGS.biografia.size.M_MOV}
				values={GENRE_TAGS.biografia}
			></Tag> */}
		</>
	);
};

export default Cartelera;

const getNowPlayingMovies = async setBillboard => {
	const res = await fetch(url, { cache: 'no-store' });

	const data = await res.json();

	setBillboard(data.results);
};
