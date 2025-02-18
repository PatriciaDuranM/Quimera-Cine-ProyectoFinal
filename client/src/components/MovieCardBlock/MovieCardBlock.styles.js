import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledCardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 8px;
	width: 156px;

	@media screen and (width>768px) {
		gap: 12px;
		width: 216px;
	}
`;

const StyledImgContainer = styled.div`
	width: 156px;
	height: 224px;
	border-radius: 7px;
	position: relative;
	box-shadow: 5px 18px 30px 0px rgb(35 11 74 / 0.7);
	border: 1px solid red;
	overflow: hidden;

	@media screen and (width>768px) {
		width: 258px;
		height: 402px;
		border-radius: 20px;
	}
`;

const StyledImg = styled.img`
	width: fit-content;
	object-fit: cover;
	height: 100%;
`;

const StyledBookIcon = styled.img`
	position: absolute;
`;

const StyledMovieTittle = styled.h2`
	margin: 0px;
	font-weight: ${FONT_WEIGHT.medium};
	font-size: 16px;
	text-align: start;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;

	@media screen and (width>768px) {
		font-size: 24px;
	}
`;

const StyledMovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 4px;
`;

const StyledMovieGenre = styled.span`
	font-weight: ${FONT_WEIGHT.regular};
	font-size: 14px;
	text-align: start;
	color: #9287a3;

	@media screen and (width>768px) {
		font-size: 20px;
		display: none;
	}
`;

export {
	StyledCardBox,
	StyledImgContainer,
	StyledImg,
	StyledBookIcon,
	StyledMovieTittle,
	StyledMovieGenre,
	StyledMovieInfo
};
