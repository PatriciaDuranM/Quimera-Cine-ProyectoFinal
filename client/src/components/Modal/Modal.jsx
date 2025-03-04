import { useRef } from 'react';
import { StyledBg, StyledClose, StyledVentana } from './StyledModal.styles';

const Modal = ({ children, setModalOpen }) => {
	// referencia, para hacer ref a un elemnto del dom desde React, para hacer referencia al div donde vamos a hacer click
	const modalref = useRef(null);

	return (
		<StyledBg
			onClick={event => handleClickOutside(event, setModalOpen, modalref)}
			ref={modalref}
		>
			<StyledVentana>
				<StyledClose
					onClick={() => setModalOpen(false)}
					src='/assets/images/Icons/CancelIconDark.svg'
				/>
				{children}
			</StyledVentana>
		</StyledBg>
	);
};

const handleClickOutside = (event, setModalOpen, modalref) => {
	// Si el clic es fuera del contenido del modal, cerramos el modal

	if (modalref.current && modalref.current === event.target) {
		setModalOpen(false);
	}
};

export default Modal;
