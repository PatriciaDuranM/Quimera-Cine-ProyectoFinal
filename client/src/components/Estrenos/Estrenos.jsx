import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import {
	StyledCarrusel,
	StyledDiv,
	StyledFilm,
	StyledTittle
} from './estrenos.styles';
import { GOYA } from '../../constants/movies';

import 'swiper/css';
import 'swiper/css/pagination'; // 🔹 Asegúrate de importar esto

const Estrenos = ({ text }) => {
	console.log(GOYA); // Verifica si los datos están bien

	return (
		<StyledDiv>
			<StyledTittle>{text}</StyledTittle>
			<StyledCarrusel>
				<Swiper
					breakpoints={{
						360: { slidesPerView: 3, spaceBetween: 16 },
						768: { slidesPerView: 4, spaceBetween: 16 },
						1024: { slidesPerView: 5, spaceBetween: 16 }
					}}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className='mySwiper'
					centeredSlides={true}
					loop={true}
				>
					{GOYA.map(movie => (
						<SwiperSlide key={movie.id}>
							<Link to={`/pelicula/${movie.id}`}>
								<StyledFilm
									src={
										movie.poster_path
											? `https://image.tmdb.org/t/p/original${movie.poster_path}`
											: 'https://via.placeholder.com/200' // 🔹 Imagen por defecto si falta el póster
									}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</StyledCarrusel>
		</StyledDiv>
	);
};

export default Estrenos;
