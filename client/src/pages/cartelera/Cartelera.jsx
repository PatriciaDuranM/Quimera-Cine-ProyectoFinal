import { useEffect, useState } from 'react';
import DiasSemana from '../../components/diasSemana/DiaSemana';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MovieCardList from '../../components/MovieCardList/MovieCardList';
import Tag from '../../components/tags/Tags';
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import { MOVIES } from '../../constants/movies';
import {
	StyledAgeBox,
	StyledBox,
	StyledButton,
	StyledButtonsBox,
	StyledContainerMoviesBlock,
	StyledContainerMoviesList,
	StyledFilterBox,
	StyledTitleFilter
} from './Cartelera.styles';

import MovieCardBlock from '../../components/MovieCardBlock/MovieCardBlock';
import { StyledMain, StyledWeek } from '../pelicula/Pelicula.styles';
import DiaSemana from '../../components/diasSemana/DiaSemana';
import Modal from '../../components/Modal/Modal';
import RadioPicker from '../../components/radiopicker/RadioPicker';
import { EDAD, GENEROS } from '../../constants/movie-genre';
import { COLORS } from '../../styles/Colors';
const API_KEY = '516800ef8302f7e2f4b5b52959005cf6';
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

const Cartelera = () => {
	const [movies, setMovies] = useState();
	console.log(movies);
	const [list, setList] = useState(false);
	useEffect(() => {
		getNowPlayingMovies(setMovies);
	}, []);

	const [modalOpen, setModalOpen] = useState(false);
	const [filterGenre, setFilterGenre] = useState([]);
	const [filterAge, setFilterAge] = useState([]);

	const filteredMovies = filterByGenre(filterGenre);

	return (
		<>
			<StyledMain>
				<StyledWeek>
					<DiaSemana />
				</StyledWeek>
				<FilterButtons
					setModalOpen={setModalOpen}
					list={list}
					setList={setList}
				></FilterButtons>
				{modalOpen && (
					<Modal setModalOpen={setModalOpen}>
						<StyledBox>
							<StyledBox>
								<StyledTitleFilter>Géneros</StyledTitleFilter>
								<StyledFilterBox>
									{GENEROS.map(genero => (
										<RadioPicker
											label={genero}
											key={genero}
											value={genero}
											action={event =>
												updateGenre(event, filterGenre, setFilterGenre)
											}
										></RadioPicker>
									))}
								</StyledFilterBox>
							</StyledBox>
							<StyledBox>
								<StyledTitleFilter>Edad</StyledTitleFilter>
								<StyledAgeBox>
									{EDAD.map(edad => (
										<RadioPicker label={edad} key={edad}></RadioPicker>
									))}
								</StyledAgeBox>
							</StyledBox>
							<StyledButtonsBox>
								<StyledButton bgColor={COLORS.prin200}>
									Borrar todo
								</StyledButton>
								<StyledButton color={COLORS.principal} bgColor={COLORS.pink}>
									Aplicar filtros
								</StyledButton>
							</StyledButtonsBox>
						</StyledBox>
					</Modal>
				)}

				{!list && (
					<StyledContainerMoviesBlock>
						{filteredMovies.map(movie => (
							<MovieCardBlock key={movie.id} {...movie} />
						))}
					</StyledContainerMoviesBlock>
				)}

				{list && (
					<StyledContainerMoviesList>
						{filteredMovies.map(movie => (
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
			</StyledMain>
		</>
	);
};

export default Cartelera;

const updateGenre = (event, filterGenre, setFilterGenre) => {
	if (event.target.checked) {
		setFilterGenre([...filterGenre, event.target.value]);
	} else {
		const updatedFilters = filterGenre.filter(
			genre => genre !== event.target.value
		);
		setFilterGenre(updatedFilters);
	}
};

const filterByGenre = filterGenre => {
	if (filterGenre.length === 0) {
		return MOVIES;
	}

	const filteredMovies = MOVIES.filter(movie =>
		movie.genre_ids.some(genre => filterGenre.includes(genre))
	);

	return filteredMovies;

	// const filtereMovies = MOVIES.filter(movie => movie.genre_ids.includes(genre));
	// return filtereMovies;
};

const getNowPlayingMovies = async setBillboard => {
	const res = await fetch(url, { cache: 'no-store' });

	const data = await res.json();

	setBillboard(data.results);
};
