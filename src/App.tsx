import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useRootContext } from './contexts/root';
import { COLORS } from './utils/colors';
import MainRoute from './pages/_route';

function App() {
	const routes = useRoutes([MainRoute]);
	const { isDark } = useRootContext();

	useEffect(() => {
		if (import.meta.env.DEV) {
			return;
		}
		fetch(`${import.meta.env.VITE_API_URL}/ping`);
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = isDark ? COLORS.dark : COLORS.light;
	}, [isDark]);

	return (
		<div className={`${isDark ? 'dark' : ''}`}>
			<div id="app" className="App  min-h-screen text-dark dark:text-light bg-light dark:bg-dark ">
				{routes}
			</div>
		</div>
	);
}

export default App;
