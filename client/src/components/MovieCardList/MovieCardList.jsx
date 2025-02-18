import { Link } from 'react-router-dom';
import Tag from '../tags/Tags';
import {
	StyledCard,
	StyledContainer,
	StyledDuration,
	StyledInfo,
	StyledInfoSave,
	StyledMoviePoster,
	StyledSaveIconOff,
	StyledSaveIconOn,
	StyledTagBox,
	StyledTitle
} from './MovieCardList.styles';
import { GENRE_TAGS } from '../../styles/tags';
import { useState } from 'react';

const MovieCardList = ({ title, duration, poster_path, genre_ids, id }) => {
	const genre = genre_ids[0];
	const [save, setSave] = useState(false);
	return (
		<>
			<StyledCard>
				<Link to={`/pelicula/${id}`}>
					<StyledMoviePoster
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
					/>
				</Link>
				<StyledContainer>
					<StyledInfoSave>
						<StyledInfo>
							<StyledTitle>{title}</StyledTitle>
							<StyledDuration>Duración {duration} minutos</StyledDuration>
						</StyledInfo>
						<StyledSaveIconOff
							onClick={() => setSave(!save)}
							$save={save}
							src='/assets/images/Icons/GuardarOffBlack.png'
						/>
						<StyledSaveIconOn
							onClick={() => setSave(!save)}
							$save={save}
							src='/assets/images/Icons/GuardarIconOffDark.svg'
						/>
					</StyledInfoSave>
					<StyledTagBox>
						<Tag
							type='genre'
							size={GENRE_TAGS[genre].size.S_MOV}
							values={GENRE_TAGS[genre]}
							position='absolute'
						></Tag>
						<Tag
							type='age'
							size={GENRE_TAGS[genre].size.S_MOV}
							values={GENRE_TAGS[genre]}
							position='absolute'
						></Tag>
					</StyledTagBox>
				</StyledContainer>
			</StyledCard>
		</>
	);
};

export default MovieCardList;
