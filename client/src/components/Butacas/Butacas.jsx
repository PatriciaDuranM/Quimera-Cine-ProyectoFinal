import { useState } from 'react';
import { BUTACAS } from '../../constants/butacas';
import {
	StyledGrid,
	StyledNumberButaca,
	StyledPantallaBox,
	StyledPantallaText,
	StyledTituloDiv,
	StyledWhiteBox
} from './Butacas.styles';
import { StyledMovieTitle } from '../../pages/pago/Pago.styles';
import Butaca from '../Butaca/Butaca';
const numbers = [1, 2, 3, 4, 5];

const Butacas = () => {
	const [butacas, setButacas] = useState(BUTACAS);

	return (
		<>
			<div>
				<StyledTituloDiv>
					<StyledMovieTitle>Selección de butacas</StyledMovieTitle>
				</StyledTituloDiv>
				<StyledWhiteBox>
					<StyledPantallaBox>
						<StyledPantallaText>Pantalla</StyledPantallaText>
						<pictore>
							<source
								media='(min-width:768px)'
								srcSet='/assets/images/Icons/butacas/pantalla/PantallaWeb.svg'
							/>
							<source
								media='(min-width:360px)'
								srcSet='/assets/images/Icons/butacas/pantalla/PantallaMov.svg'
							/>
							<img
								src='/assets/images/Icons/butacas/pantalla/PantallaMov.svg'
								alt='Representación de la pantalla'
							/>
						</pictore>
					</StyledPantallaBox>
					<StyledGrid>
						{BUTACAS.map((butaca, index) => {
							const fila = Math.floor(index / 8); // Determina el número de fila actual (cada 8 butacas es una fila nueva)

							if ((index + 1) % 8 === 0) {
								return (
									<StyledNumberButaca key={fila + index}>
										{fila + 1}
									</StyledNumberButaca>
								); // Muestra el número de la fila (sumando 1 porque las filas empiezan desde 0)
							} else {
								const accBut = [0, 6, 8, 14].includes(index);
								return (
									<Butaca $accBut={accBut} key={butaca.row + butaca.column} />
								);
							}
						})}
						<StyledNumberButaca>A</StyledNumberButaca>
						<StyledNumberButaca>B</StyledNumberButaca>
						<StyledNumberButaca>C</StyledNumberButaca>
						<StyledNumberButaca>D</StyledNumberButaca>
						<StyledNumberButaca>E</StyledNumberButaca>
						<StyledNumberButaca>F</StyledNumberButaca>
						<StyledNumberButaca>G</StyledNumberButaca>
					</StyledGrid>
				</StyledWhiteBox>
			</div>
			{/* <StyledButaca src='/assets/images/Icons/butacas/But_Disponible_Movil.svg' />
			<StyledButaca
				src='/assets/images/Icons/butacas/But_Desactivada_General_Movil.svg'
				$butaca={butaca}
				$state='ocupada'
			/>
			<StyledButaca
				src='/assets/images/Icons/butacas/But_Seleccionada_Movil.svg'
				$butaca={butaca}
				$state='seleccionada'
			/>
			<StyledButaca
				src='/assets/images/Icons/butacas/ButAcce_Disponible_movil.svg'
				$butaca={butaca}
				$state='accDisponible'
			/>
			<StyledButaca
				src='/assets/images/Icons/butacas/ButAcce_Ocupada_movil.svg'
				$butaca={butaca}
				$state='accOcupada'
			/>
			<StyledButaca
				src='/assets/images/Icons/butacas/ButAcce_Seleccionada_movil.svg'
				$butaca={butaca}
				$state='accSeleccionada'
			/> */}
		</>
	);
};

export default Butacas;
