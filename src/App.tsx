import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useRootContext } from './contexts/root';
import { COLORS } from './utils/colors';
import { APP_SCRIPT_URL } from './utils/contants';
import MainRoute from './pages/_route';

function App() {
	const routes = useRoutes([MainRoute]);
	const { isDark } = useRootContext();

	useEffect(() => {
		if (import.meta.env.DEV) return;
		fetch(APP_SCRIPT_URL, {
			method: 'POST',
			body: 'ok',
		});
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
