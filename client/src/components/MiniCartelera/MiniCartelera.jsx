import { Link } from 'react-router-dom';
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
			<Link to='/cartelera'>
				<StyledButton>Ver Cartelera</StyledButton>
			</Link>
		</StyledDiv>
	);
};

export default MiniCartelera;
