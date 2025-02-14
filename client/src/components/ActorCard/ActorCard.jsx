import { StyledCard, StyledImg, StyledName } from './ActorCard.styles';

const ActorCard = ({ photo, name }) => {
	return (
		<StyledCard>
			<StyledImg src={`https://image.tmdb.org/t/p/original${photo}`} />
			<StyledName>{name}</StyledName>
		</StyledCard>
	);
};

export default ActorCard;
