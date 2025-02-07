import {
	StyledButton,
	StyledCarrusel,
	StyledDiv,
	StyledFilm,
	StyledTittle
} from './miniCartelera.styles';

const MiniCartelera = () => {
	return (
		<StyledDiv>
			<StyledTittle>Cartelera</StyledTittle>
			<StyledCarrusel>
				<StyledFilm />
				<StyledFilm />
				<StyledFilm />
				<StyledFilm />
			</StyledCarrusel>
			<StyledButton>Ver Cartelera</StyledButton>
		</StyledDiv>
	);
};

export default MiniCartelera;
