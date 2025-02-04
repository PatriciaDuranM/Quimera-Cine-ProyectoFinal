import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cartelera from '../pages/cartelera/Cartelera';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/cartelera' element={<Cartelera />} />
			</Route>
		</Routes>
	);
};

export default Router;
