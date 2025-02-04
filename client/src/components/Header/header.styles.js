import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { NavLink } from 'react-router-dom';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledBar = styled.header`
	width: 100%;
	height: 112px;
	background-color: ${COLORS.pink};
	color: ${COLORS.neutralCold};
	padding-inline: 16px;
	padding-block: 21px;

	@media screen and (width>768px) {
		height: 160px;
		padding-inline: 40px;
		padding-inline: 24px;
		display: flex;
		flex-direction: row;
		gap: 72px;
	}
`;

const StyledMenuDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const StyledIcon = styled.img`
	width: 70px;
	height: 70px;
	padding-inline: 8px;
	padding-block: 4px;
`;

const StyledMenuIcon = styled.img`
	width: 62px;
	height: 62px;
	padding-inline: 10px;
	padding-block: 10px;
	@media screen and (width>768px) {
		display: none;
	}
`;

const StyledMenuList = styled.ul`
	z-index: 1;
	display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
	flex-direction: column;
	width: 100%;
	position: absolute;
	top: 112px;
	left: 0px;
	background-color: ${COLORS.pink};
	color: ${COLORS.neutralCold};
	padding-block: 16px;
	padding-inline: 32px;
	justify-content: space-around;
	gap: 8px;
	align-items: flex-end;
	border-top: 4px solid ${COLORS.neutralCold};

	@media screen and (width>768px) {
		border-top: none;
		position: static;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 40px;
		background-color: red;
	}
`;

const StyledItem = styled.li`
	height: 48px;
	width: fit-content;
	display: flex;
	align-items: center;
	&:last-child {
		margin-left: auto;
	}
`;

const StyledNavLink = styled(NavLink)`
	font-size: 24px;
	font-family: ${FONT_FAMILY.clashGrotesk};
	font-weight: ${FONT_WEIGHT.medium};
	position: relative;
	&.active::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 4px;
		border-radius: 8px;
		background-color: ${COLORS.neutralCold};
		bottom: -10px;
		left: 0;
	}
`;

export {
	StyledBar,
	StyledIcon,
	StyledMenuIcon,
	StyledMenuDiv,
	StyledMenuList,
	StyledItem,
	StyledNavLink
};
