import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cartelera from '../pages/cartelera/Cartelera';
import Layout from '../layouts/Layout';
import Tarifas from '../pages/tarifas/Tarifas';
import Blog from '../pages/blog/Blog';
import Perfil from '../pages/perfil/Perfil';
import Actividades from '../pages/actividades/Actividades';
import Pelicula from '../pages/pelicula/Pelicula';
import Pago from '../pages/pago/Pago';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/cartelera' element={<Cartelera />} />
				<Route path='/tarifas' element={<Tarifas />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/actividades' element={<Actividades />} />
				<Route path='/perfil' element={<Perfil />} />
				<Route path='/pelicula/:id' element={<Pelicula />} />
				<Route path='/pago/:id' element={<Pago />} />
			</Route>
		</Routes>
	);
};

export default Router;
