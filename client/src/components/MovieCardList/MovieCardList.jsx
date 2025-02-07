import { AGE_TAGS } from '../../styles/tags';
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
					type='age'
					size={AGE_TAGS[16].size.S_MOV}
					values={AGE_TAGS[16]}
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
