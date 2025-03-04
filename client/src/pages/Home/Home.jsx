import Estrenos from '../../components/Estrenos/Estrenos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
import {
	Autoplay,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination
} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<StyledMain>
				<picture>
					<Swiper
						modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
						spaceBetween={0}
						slidesPerView={1}
						cssMode={true}
						centeredSlides={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false
						}}
						navigation={true}
						pagination={{
							clickable: true
						}}
						mousewheel={true}
						keyboard={true}
						className='mySwiper'
						loop={true}
					>
						<SwiperSlide>
							<source
								media='(min-width:768px)'
								srcSet='/assets/images/banner/Banner1web (2).jpg'
							/>
							<source
								media='(min-width:360px )'
								srcSet='/assets/images/banner/Banner1mov (2).jpg'
							/>
							<Link to={'/pelicula/426063'}>
								<StyledBanner src='/assets/images/banner/Banner1mov (2).jpg' />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<source
								media='(min-width:768px)'
								srcSet='/assets/images/banner/Banner2web.jpg'
							/>
							<source
								media='(min-width:360px )'
								srcSet='/assets/images/banner/Banner2mov.jpg'
							/>
							<Link to={'/pelicula/1038263'}>
								<StyledBanner src='/assets/images/banner/Banner2mov.jpg' />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<source
								media='(min-width:768px)'
								srcSet='/assets/images/banner/Banner3web.jpg'
							/>
							<source
								media='(min-width:360px )'
								srcSet='/assets/images/banner/Banner3mov.jpg'
							/>
							<Link to={'/pelicula/823219'}>
								<StyledBanner src='/assets/images/banner/Banner3mov.jpg' />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<source
								media='(min-width:768px)'
								srcSet='/assets/images/banner/Banner4web.jpg'
							/>
							<source
								media='(min-width:360px )'
								srcSet='/assets/images/banner/Banner4mov.jpg'
							/>
							<Link to={'/pelicula/1084199'}>
								<StyledBanner src='/assets/images/banner/Banner4mov.jpg' />
							</Link>
						</SwiperSlide>
					</Swiper>
				</picture>
				<Estrenos text='GOYA' />
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
								<StyledMovie2 src='/assets/images/movies/Vidas_pasadas/vidas-pasadas.jpg' />
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
							<Link to={'/pelicula/948549'}>
								<StyledMovieCardWeb src='/assets/images/movies/love_lies_bleeding-646759765-mmed 1.jpg' />
							</Link>
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
							<Link to={'/pelicula/666277'}>
								<StyledMovieCardWeb src='/assets/images/movies/Vidas_pasadas/vidas-pasadas.jpg' />
							</Link>
						</StyledBar2Web>
					</StyledDivWeb>
				</StyledPelidelMesWeb>
			</StyledMain>
		</>
	);
};

export default Home;
