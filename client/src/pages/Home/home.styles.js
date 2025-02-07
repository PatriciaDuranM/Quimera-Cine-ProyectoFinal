import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledBanner = styled.img`
	width: 100%;
`;

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const StyledPelidelMesMobile = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding-bottom: 32px;

	@media screen and (width>768px) {
		display: none;
	}
`;

const StyledPelidelMesWeb = styled.div`
	display: none;

	@media screen and (width>768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding-inline: 16%;
		padding-bottom: 48px;
	}
`;

const StyledDivWeb = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	width: 100%;
`;

const StyledBar1Web = styled.div`
	border-radius: 20px;
	height: 320px;
	width: 40%;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-inline: 48px;
	gap: 32px;
	background-color: ${COLORS.pink};
`;

const StyledBar2Web = styled.div`
	border-radius: 20px;
	height: 320px;
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding-inline: 48px;
	gap: 32px;
	background-color: ${COLORS.blue};
`;

const StyledMovieCardWeb = styled.img`
	height: 224px;
	width: 160px;
	border-radius: 20px;
`;

const StyledVoteBar = styled.div`
	display: grid;
	height: 32px;
	grid-template-columns: 40% 60%;
	color: ${COLORS.principal};
`;

const StyledBar1 = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-inline: 40px;
	background-color: ${COLORS.pink};
	font-weight: ${FONT_WEIGHT.medium};

	@media screen and (width>768px) {
		font-size: 52px;
		font-weight: ${FONT_WEIGHT.semibold};
		font-family: ${FONT_FAMILY.clashDisplay};
		color: ${COLORS.principal};
	}
`;

const StyledBar2 = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-inline: 40px;
	background-color: ${COLORS.blue};
	font-weight: ${FONT_WEIGHT.medium};

	@media screen and (width>768px) {
		font-size: 52px;
		font-weight: ${FONT_WEIGHT.semibold};
		font-family: ${FONT_FAMILY.clashDisplay};
		color: ${COLORS.principal};
	}
`;

const StyledTitlePelidelMes = styled.h2`
	font-size: 30px;
	font-family: ${FONT_FAMILY.clashDisplay};
	font-weight: ${FONT_WEIGHT.medium};
	margin-bottom: 0px;

	@media screen and (width>768px) {
		font-size: 40px;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-inline: 27px;
	gap: 12px;
`;

const StyledText = styled.p`
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.regular};
	margin-top: 12px;

	@media screen and (width>768px) {
		font-size: 28px;
	}
`;

const StyledDivPelisMes = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
`;

const StyledMovieCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	align-items: center;
`;

const StyledMovie1 = styled.img`
	width: 128px;
	height: 194px;
	border-radius: 7px;
	border: 2px solid ${COLORS.pink};
`;

const StyledMovie2 = styled.img`
	width: 128px;
	height: 194px;
	border-radius: 7px;
	border: 2px solid ${COLORS.blue};
`;

const StyledMovieTittle = styled.h3`
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.regular};

	@media screen and (width>768px) {
		font-size: 52px;
		font-weight: ${FONT_WEIGHT.semibold};
		color: ${COLORS.principal};
		margin: 0px;
	}
`;

export {
	StyledBanner,
	StyledMain,
	StyledTitlePelidelMes,
	StyledVoteBar,
	StyledPelidelMesMobile,
	StyledBar1,
	StyledBar2,
	StyledText,
	StyledDivPelisMes,
	StyledMovieCard,
	StyledMovie1,
	StyledMovie2,
	StyledMovieTittle,
	StyledDiv,
	StyledPelidelMesWeb,
	StyledBar1Web,
	StyledDivWeb,
	StyledBar2Web,
	StyledMovieCardWeb
};
