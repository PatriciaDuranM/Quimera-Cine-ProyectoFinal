import { useParams } from 'react-router-dom';
import ActorCard from '../../components/ActorCard/ActorCard';
import { MOVIES } from '../../constants/movies';
import {
	StyledMain,
	StyledMarkIcon,
	StyledMovieBanner,
	StyledTagBox,
	StyledTitle,
	StyledTitleBox
} from './Pelicula.styles';
import Tag from '../../components/tags/Tags';
import { GENRE_TAGS } from '../../styles/tags';

const Pelicula = () => {
	const { id } = useParams();
	console.log(id);
	const moviefound = MOVIES.find(movie => movie.id === id);

	return (
		<>
			<StyledMain>
				{/* {moviefound.banners.map(banner => (
					<StyledMovieBanner key={banner} src={banner} />
				))} */}
				<StyledTitleBox>
					<StyledTitle>{moviefound.title}</StyledTitle>
					<StyledMarkIcon src='/assets/images/Icons/GuardarIconOff.svg' />
				</StyledTitleBox>
				<StyledTagBox>
					{moviefound.genre_ids.map(genre => (
						<Tag
							key={genre}
							type='genre'
							size={GENRE_TAGS[genre].size.M_MOV}
							values={GENRE_TAGS[genre]}
						></Tag>
					))}
				</StyledTagBox>
				{moviefound.actors.map(actor => (
					<ActorCard key={actor.name} photo={actor.photo} name={actor.name} />
				))}
			</StyledMain>
		</>
	);
};

export default Pelicula;
