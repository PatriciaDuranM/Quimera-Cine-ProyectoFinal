import { Link } from 'react-router-dom';
import {
	StyledBar,
	StyledIcon,
	StyledItem,
	StyledMenuDiv,
	StyledMenuIcon,
	StyledMenuList,
	StyledNav,
	StyledNavLink
} from './header.styles';
import { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledBar>
			<StyledMenuDiv>
				<Link to='/'>
					<StyledIcon
						src='/assets/images/logo/logoGrandeLight.png'
						alt='Inicio'
					/>
				</Link>
				<StyledMenuIcon
					onClick={() => setMenuOpen(!menuOpen)}
					src='/assets/images/Icons/MenuIconLightBig.svg'
					alt='Menu'
				/>
			</StyledMenuDiv>
			<StyledNav>
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
			</StyledNav>
		</StyledBar>
	);
};

export default Header;
