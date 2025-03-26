import { StyledMain } from '../../pages/Home/home.styles';
import {
	StyledCard,
	StyledDiv,
	StyledFilm,
	StyledImg,
	StyledText,
	StyledTitle,
	StyledTitleBox,
	StyledTitleCard
} from './Construccion.styles';

const Construccion = () => {
	return (
		<>
			<StyledTitleBox>
				{/* <picture>
					<source
						media='(min-width:768px)'
						srcSet='/assets/images/images/filmWeb.svg'
					/>
					<source
						media='(min-width:360px )'
						srcSet='/assets/images/images/filmMov.svg'
					/>
					<StyledFilm src='/assets/images/images/filmMov.svg' />
				</picture> */}
				<StyledTitle>PRÓXIMAMENTE</StyledTitle>
			</StyledTitleBox>
			<>
				<StyledCard>
					<StyledTitleCard> PÁGINA EN CONSTRUCCIÓN</StyledTitleCard>
					<StyledDiv>
						<StyledImg />
						<StyledText>
							Estamos trabajando para brindarte la mejor experiencia. Disculpa
							las molestias.
						</StyledText>
					</StyledDiv>
				</StyledCard>
			</>
		</>
	);
};

export default Construccion;
