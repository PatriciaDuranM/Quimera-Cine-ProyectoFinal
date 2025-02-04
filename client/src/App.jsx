import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</div>
	);
};

export default App;
