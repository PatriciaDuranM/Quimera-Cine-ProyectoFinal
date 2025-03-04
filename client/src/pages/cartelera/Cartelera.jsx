import { useState } from 'react';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MovieCardList from '../../components/MovieCardList/MovieCardList';
import { CARTELERA, GOYA, MOVIES, PROXIMAMENTE } from '../../constants/movies';
import {
	StyledAgeBox,
	StyledBox,
	StyledButton,
	StyledButtonsBox,
	StyledContainerMoviesBlock,
	StyledContainerMoviesList,
	StyledFilterBox,
	StyledPestaña,
	StyledPestañasBox,
	StyledTitleFilter
} from './Cartelera.styles';

import DiaSemana from '../../components/diasSemana/DiaSemana';
import Modal from '../../components/Modal/Modal';
import MovieCardBlock from '../../components/MovieCardBlock/MovieCardBlock';
import RadioPicker from '../../components/radiopicker/RadioPicker';
import { EDAD, GENEROS } from '../../constants/movie-genre';
import { COLORS } from '../../styles/Colors';
import { StyledMain, StyledWeek } from '../pelicula/Pelicula.styles';
import { semana } from '../../constants/days';
const API_KEY = '516800ef8302f7e2f4b5b52959005cf6';
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

const Cartelera = () => {
	const [movies, setMovies] = useState(CARTELERA);
	const [list, setList] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [filterGenre, setFilterGenre] = useState([]);
	const [filterAge, setFilterAge] = useState([]);
	const [nextMovies, setNextMovies] = useState(false);
	const [selectedDay, setSelectedDay] = useState();

	return (
		<>
			<StyledMain>
				<StyledPestañasBox>
					<StyledPestaña
						$nextMovies={nextMovies}
						onClick={() => setNextMovies(false)}
						$selected='now'
					>
						En cartelera
					</StyledPestaña>
					<StyledPestaña
						$nextMovies={nextMovies}
						$selected='next'
						onClick={() => setNextMovies(true)}
					>
						Próximamente
					</StyledPestaña>
				</StyledPestañasBox>
				{!nextMovies && (
					<StyledWeek>
						{semana.map(dayInfo => (
							<DiaSemana
								key={dayInfo.dayNumber}
								month={dayInfo.monthName}
								number={dayInfo.dayNumber}
								name={dayInfo.dayName}
								action={() => setSelectedDay(dayInfo)}
								isSelected={selectedDay === dayInfo}
							/>
						))}
					</StyledWeek>
				)}
				<FilterButtons
					setModalOpen={setModalOpen}
					list={list}
					setList={setList}
				></FilterButtons>
				{modalOpen && (
					<Modal setModalOpen={setModalOpen} setFilterGenre={setFilterGenre}>
						<StyledBox>
							<StyledBox>
								<StyledTitleFilter>Géneros</StyledTitleFilter>
								<StyledFilterBox>
									{GENEROS.map(genero => (
										<RadioPicker
											label={genero.label}
											key={genero.value}
											value={genero.value}
											checked={filterGenre.includes(genero.value)}
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
								<StyledButton
									$bgColor={COLORS.prin200}
									onClick={() =>
										eraseFilters(setFilterGenre, setModalOpen, setMovies)
									}
								>
									Borrar todo
								</StyledButton>
								<StyledButton
									$color={COLORS.principal}
									$bgColor={COLORS.pink}
									onClick={() =>
										filterByGenre(
											filterGenre,
											setFilterGenre,
											setMovies,
											setModalOpen
										)
									}
								>
									Aplicar filtros
								</StyledButton>
							</StyledButtonsBox>
						</StyledBox>
					</Modal>
				)}

				{!nextMovies && (
					<>
						{!list && (
							<StyledContainerMoviesBlock>
								{movies.map(movie => (
									<MovieCardBlock key={movie.id} {...movie} />
								))}
							</StyledContainerMoviesBlock>
						)}

						{list && (
							<StyledContainerMoviesList>
								{movies.map(movie => (
									<MovieCardList key={movie.id} {...movie} />
								))}
							</StyledContainerMoviesList>
						)}
					</>
				)}
				{nextMovies && (
					<>
						{!list && (
							<StyledContainerMoviesBlock>
								{PROXIMAMENTE.map(movie => (
									<MovieCardBlock key={movie.id} {...movie} />
								))}
							</StyledContainerMoviesBlock>
						)}

						{list && (
							<StyledContainerMoviesList>
								{PROXIMAMENTE.map(movie => (
									<MovieCardList key={movie.id} {...movie} />
								))}
							</StyledContainerMoviesList>
						)}
					</>
				)}
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

const filterByGenre = (
	filterGenre,
	setFilterGenre,
	setMovies,
	setModalOpen
) => {
	setFilterGenre([...filterGenre]);
	if (filterGenre.length === 0) {
		setMovies(MOVIES);
		return;
	}

	const filteredMovies = MOVIES.filter(movie =>
		movie.genre_ids.some(genre => filterGenre.includes(genre))
	);
	setModalOpen(false);
	setMovies(filteredMovies);
};

const eraseFilters = (setFilterGenre, setModalOpen, setMovies) => {
	setFilterGenre([]);
	setModalOpen(false);
	setMovies(MOVIES);
};
