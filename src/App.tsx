import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useRootContext } from './contexts/root';
import MainRoute from './pages/_route';
import { COLORS } from './utils/colors';
import { APP_SCRIPT_URL } from './utils/contants';

function App() {
	const routes = useRoutes([MainRoute]);
	const { isDark } = useRootContext();

	useEffect(() => {
		if (import.meta.env.DEV) return;
		fetch(APP_SCRIPT_URL)
			.then(() => {})
			.catch(() => {});
	}, []);

	document.body.style.backgroundColor = isDark ? COLORS.dark : COLORS.light;

	return (
		<div className={`${isDark ? 'dark' : ''}`}>
			<div id="app" className="App  min-h-screen text-dark dark:text-light bg-light dark:bg-dark ">
				{routes}
			</div>
		</div>
	);
}

export default App;
