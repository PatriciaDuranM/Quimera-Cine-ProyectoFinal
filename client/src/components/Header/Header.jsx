import { Link } from 'react-router-dom';
import {
	StyledBar,
	StyledIcon,
	StyledItem,
	StyledMenuDiv,
	StyledMenuIcon,
	StyledMenuList,
	StyledNavLink
} from './header.styles';
import { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledBar>
			<StyledMenuDiv>
				<Link to='/'>
					<StyledIcon src='../assets/images/logo/logoGrandeLight.png' />
				</Link>
				<StyledMenuIcon
					onClick={() => setMenuOpen(!menuOpen)}
					src='../assets/images/Icons/MenuBigLight.png'
					alt='Menu'
				/>
			</StyledMenuDiv>
			<nav>
				<StyledMenuList $menuOpen={menuOpen}>
					<StyledItem>
						<StyledNavLink to='/cartelera'>Cartelera</StyledNavLink>
					</StyledItem>
					<StyledItem>
						<StyledNavLink to='/tarifas'>Tarifas</StyledNavLink>
					</StyledItem>
					<StyledItem>
						<StyledNavLink to='/blog'>Blog</StyledNavLink>
					</StyledItem>
					<StyledItem>
						<StyledNavLink to='/actividades'>Actividades</StyledNavLink>
					</StyledItem>
					<StyledItem>
						<StyledNavLink to='/iniciarSesion'>Iniciar sesión</StyledNavLink>
					</StyledItem>
				</StyledMenuList>
			</nav>
		</StyledBar>
	);
};

export default Header;
