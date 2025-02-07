import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import Tag from '../tags/Tags';
import {
	StyledBookIcon,
	StyledCardBox,
	StyledImg,
	StyledImgContainer,
	StyledMovieGenre,
	StyledMovieInfo,
	StyledMovieTittle
} from './MovieCardList.styles';

const MovieCardList = () => {
	return (
		<StyledCardBox>
			<StyledImgContainer>
				<Tag
					type='genre'
					size={GENRE_TAGS.biografia.size.M_MOV}
					values={GENRE_TAGS.biografia}
				></Tag>
				<StyledBookIcon src='' />
				<StyledImg src='' />
			</StyledImgContainer>
			<StyledMovieInfo>
				<StyledMovieTittle>Benedetti sesenta años de luz</StyledMovieTittle>
				<StyledMovieGenre>Documental</StyledMovieGenre>
			</StyledMovieInfo>
		</StyledCardBox>
	);
};

export default MovieCardList;
