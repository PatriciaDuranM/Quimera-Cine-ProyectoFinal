import {
	StyledBox,
	StyledFollow,
	StyledFooter,
	StyledLogo,
	StyledOption,
	StyledOptionsBox,
	StyledRRSSBox,
	StyledRRSSIcon
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledLogo src='/assets/images/logo/LogoLetrasPqDark.svg' />
			<StyledOptionsBox>
				<StyledOption>Inicio</StyledOption>
				<StyledOption>Sobre Nosotros</StyledOption>
				<StyledOption>FAQ</StyledOption>
				<StyledOption>Ayuda</StyledOption>
				<StyledOption>Contacto</StyledOption>
			</StyledOptionsBox>
			<StyledBox>
				<StyledFollow>Síguenos</StyledFollow>
				<StyledRRSSBox>
					<StyledRRSSIcon src='/assets/images/Icons/RRSS/facebookIcon.svg' />
					<StyledRRSSIcon src='/assets/images/Icons/RRSS/instaIcon.svg' />
					<StyledRRSSIcon src='/assets/images/Icons/RRSS/blusky icon.svg' />
					<StyledRRSSIcon src='/assets/images/Icons/RRSS/twIcon.svg' />
				</StyledRRSSBox>
			</StyledBox>
		</StyledFooter>
	);
};

export default Footer;
