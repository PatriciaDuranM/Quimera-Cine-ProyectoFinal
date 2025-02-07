import {
	StyledCarrusel,
	StyledDiv,
	StyledFilm,
	StyledTittle
} from './estrenos.styles';

const Estrenos = ({ text }) => {
	return (
		<StyledDiv>
			<StyledTittle>{text}</StyledTittle>
			<StyledCarrusel>
				<StyledFilm />
				<StyledFilm />
				<StyledFilm />
				<StyledFilm />
				<StyledFilm />
			</StyledCarrusel>
		</StyledDiv>
	);
};

export default Estrenos;
