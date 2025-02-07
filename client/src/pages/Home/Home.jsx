import Estrenos from '../../components/Estrenos/Estrenos';
import MiniCartelera from '../../components/MiniCartelera/MiniCartelera';
import {
	StyledBanner,
	StyledBar1,
	StyledBar1Web,
	StyledBar2,
	StyledBar2Web,
	StyledDiv,
	StyledDivPelisMes,
	StyledDivWeb,
	StyledMain,
	StyledMovie1,
	StyledMovie2,
	StyledMovieCard,
	StyledMovieCardWeb,
	StyledMovieTittle,
	StyledPelidelMesMobile,
	StyledPelidelMesWeb,
	StyledText,
	StyledTitlePelidelMes,
	StyledVoteBar
} from './home.styles';

const Home = () => {
	return (
		<>
			<StyledMain>
				<picture>
					<source
						media='(min-width:768px )'
						srcSet='/assets/images/banner/banner1web.jpg'
					/>
					<source
						media='(min-width:360px )'
						srcSet='/assets/images/banner/banner1mov.jpg'
					/>

					<StyledBanner src='/assets/images/banner/banner1mov.jpg' />
				</picture>
				<Estrenos text='Estrenos' />
				<MiniCartelera />
				<StyledPelidelMesMobile>
					<StyledDiv>
						<StyledTitlePelidelMes>La peli del mes</StyledTitlePelidelMes>
						<StyledText>
							Vota la peli que quieres que volvamos a traer al cine. Pulsa en la
							portada de la película para votarla.
						</StyledText>
						<StyledDivPelisMes>
							<StyledMovieCard>
								<StyledMovie1 src='/assets/images/movies/love_lies_bleeding-646759765-mmed 1.jpg' />
								<StyledMovieTittle>Love Lies Bleeding</StyledMovieTittle>
							</StyledMovieCard>
							<StyledMovieCard>
								<StyledMovie2 src='/assets/images/movies/vidas-pasadas.jpg' />
								<StyledMovieTittle>Vidas Pasadas</StyledMovieTittle>
							</StyledMovieCard>
						</StyledDivPelisMes>
					</StyledDiv>
					<StyledVoteBar>
						<StyledBar1>40%</StyledBar1>
						<StyledBar2>60%</StyledBar2>
					</StyledVoteBar>
				</StyledPelidelMesMobile>
				<StyledPelidelMesWeb>
					<StyledTitlePelidelMes>La peli del mes</StyledTitlePelidelMes>
					<StyledText>
						Vota la peli que quieres que volvamos a traer al cine. Pulsa en la
						portada de la película para votarla.
					</StyledText>
					<StyledDivWeb>
						<StyledBar1Web>
							<StyledMovieCardWeb src='/assets/images/movies/love_lies_bleeding-646759765-mmed 1.jpg' />
							<div>
								<StyledMovieTittle>Love Lies Bleeding</StyledMovieTittle>
								<StyledBar1>40%</StyledBar1>
							</div>
						</StyledBar1Web>
						<StyledBar2Web>
							<div>
								<StyledMovieTittle>Vidas Pasadas</StyledMovieTittle>
								<StyledBar2>60%</StyledBar2>
							</div>
							<StyledMovieCardWeb src='/assets/images/movies/vidas-pasadas.jpg' />
						</StyledBar2Web>
					</StyledDivWeb>
				</StyledPelidelMesWeb>
			</StyledMain>
		</>
	);
};

export default Home;
