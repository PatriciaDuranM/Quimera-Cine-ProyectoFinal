import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledTitleBox = styled.div`
	width: 100%;
	height: 154px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	@media screen and (width>768px) {
		height: 252px;
	}
`;

const StyledTitle = styled.h2`
	margin: 0;
	transform: rotate(-4.718deg);
	font-family: ${FONT_FAMILY.clashDisplay};
	color: #fff;
	font-size: 28px;
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width>768px) {
		font-size: 48px;
	}
`;

const StyledFilm = styled.img`
	width: 100%;
	height: fit-content;
	position: absolute;
	top: 0px;
	left: 0px;
`;

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	padding-block: 32px;
	padding-inline: 16px;
	@media screen and (width>768px) {
	}
`;
const StyledCard = styled.div`
	display: flex;
	width: 318px;
	height: 401px;
	padding: 16px;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	flex-shrink: 0;
	border-radius: 16px;
	background: #c3b1e1;
	box-shadow: 4px 4px 4px 0px rgba(35, 11, 74, 0.25);

	@media screen and (width>768px) {
		width: 921px;
		height: 461px;
		padding: 40px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;
	}
`;

const StyledTitleCard = styled.span`
	color: ${COLORS.principal};
	text-align: center;
	font-family: ${FONT_FAMILY.clashDisplay};
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width>768px) {
		font-size: 40px;
	}
`;

const StyledImg = styled.img`
	width: 292px;
	height: 201px;
	border-radius: 55px;
	background-image: url('/assets/images/images/construccionMov.jpg ');

	@media screen and (width>768px) {
		width: 492px;
		height: 291px;
		background-image: url('/assets/images/images/construccionWeb.jpg ');
	}
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	justify-content: flex-start;
	align-items: center;

	@media screen and (width>768px) {
		flex-direction: row;
		gap: 27px;
	}
`;

const StyledText = styled.p`
	color: ${COLORS.principal};
	text-align: center;
	font-size: 18px;
	font-style: normal;

	@media screen and (width>768px) {
		font-size: 20px;
	}
`;
export {
	StyledTitleBox,
	StyledTitle,
	StyledFilm,
	StyledCard,
	StyledImg,
	StyledTitleCard,
	StyledDiv,
	StyledText
};
