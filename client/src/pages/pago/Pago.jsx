import { Link, useParams } from 'react-router-dom';
import PasoPago from '../../components/PasoPago/PasoPago';
import { StyledBack, StyledMain } from '../pelicula/Pelicula.styles';
import {
	StyledBotonesBox,
	StyledInfoBox,
	StyledMovieTitle,
	StyledPasosBox,
	StyledTituloDiv
} from './Pago.styles';
import Boton from '../../components/Boton/Boton';
import { COLORS } from '../../styles/Colors';
import PagoDescripcion from '../../components/PagoDescripcion/PagoDescripcion';
import { useState } from 'react';
import { BUTACAS } from '../../constants/butacas';
import Butacas from '../../components/Butacas/Butacas';

const Pago = () => {
	const [step, setStep] = useState(1);
	const [info, setInfo] = useState({});
	const { id } = useParams();

	return (
		<>
			<StyledMain>
				<Link to={`/pelicula/${id}`}>
					<StyledBack position='static'>
						<img
							src='/assets/images/Icons/BackLightIcon.svg'
							alt='Volver atrás'
						/>
					</StyledBack>
					<span>Compra de entradas</span>
				</Link>
				<StyledPasosBox>
					<PasoPago title={'PASO 1'} text={'Sesión'}></PasoPago>
					<PasoPago title={'PASO 2'} text={'Butacas'}></PasoPago>
					<PasoPago title={'PASO 3'} text={'Datos'}></PasoPago>
					<PasoPago title={'PASO 4'} text={'Pago'}></PasoPago>
				</StyledPasosBox>
				{step === 1 && (
					<>
						<h2>PASO 1 SESION</h2>
						<Butacas></Butacas>
						<span>Titulo de pelicula</span>
						<span>Selecciona la sesión</span>

						<div>
							<label htmlFor=''>
								día <img src='' alt='' />
							</label>
							<select id='day' name='day'></select>
						</div>
						<div>
							<label htmlFor=''>hora</label>
							<select id='hour' name='hour'></select>
						</div>
						<span>Selecciona tus entradas</span>
						<span>Un máximo de 6 entradas</span>
						<StyledBotonesBox>
							<Boton color={COLORS.neutralCold} text={'Cancelar'}></Boton>
							<Boton color={COLORS.blue} text={'Siguiente'}></Boton>
						</StyledBotonesBox>
					</>
				)}
				{step === 2 && (
					<>
						<h2>PASO 2 BUTACAS</h2>
						<StyledInfoBox>
							<StyledMovieTitle>Título peli </StyledMovieTitle>
							<PagoDescripcion title={'Día:'} text={'Martes 18 Junio'} />
							<PagoDescripcion title={'Sesión:'} text={'20:15'} />
							<PagoDescripcion title={'Tarifa:'} text={'Carnet Joven 5.50€'} />
							<PagoDescripcion title={'Entradas:'} text={'2'} />
						</StyledInfoBox>

						<StyledTituloDiv>
							<StyledMovieTitle>Selección de butacas</StyledMovieTitle>
						</StyledTituloDiv>

						<StyledBotonesBox>
							<Boton color={COLORS.neutralCold} text={'Cancelar'}></Boton>
							<Boton color={COLORS.blue} text={'Siguiente'}></Boton>
						</StyledBotonesBox>
					</>
				)}

				{step === 3 && (
					<>
						<h2>PASO 3 DATOS</h2>
						<StyledBotonesBox>
							<Boton color={COLORS.neutralCold} text={'Cancelar'}></Boton>
							<Boton color={COLORS.blue} text={'Siguiente'}></Boton>
						</StyledBotonesBox>
					</>
				)}
				{step === 4 && (
					<>
						<h2>PASO 4 PAGO</h2>
						<StyledBotonesBox>
							<Boton color={COLORS.neutralCold} text={'Cancelar'}></Boton>
							<Boton color={COLORS.blue} text={'Siguiente'}></Boton>
						</StyledBotonesBox>
					</>
				)}
			</StyledMain>
		</>
	);
};

export default Pago;
