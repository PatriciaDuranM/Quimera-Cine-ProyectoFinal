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
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';
import { useState } from 'react';

const MovieCardList = ({
	title,
	duration,
	poster_path,
	genre_ids,
	id,
	age
}) => {
	const [save, setSave] = useState(false);
	console.log(age, title);
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
						{genre_ids.map(genre => (
							<Tag
								key={genre}
								type='genre'
								size={GENRE_TAGS[genre].size.L_MOV}
								values={GENRE_TAGS[genre]}
								position='static'
							></Tag>
						))}
						<Tag
							key={age}
							type='age'
							size={AGE_TAGS[age].size.L_MOV}
							values={AGE_TAGS[age]}
							position='static'
						></Tag>
					</StyledTagBox>
				</StyledContainer>
			</StyledCard>
		</>
	);
};

export default MovieCardList;
