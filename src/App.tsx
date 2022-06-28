import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useRootContext } from './contexts/root';
import MainRoute from './pages/_route';

function App() {
	const routes = useRoutes([MainRoute]);
	const { isDark } = useRootContext();

	useEffect(() => {
		if (import.meta.env.DEV) return;
		fetch('https://script.google.com/macros/s/AKfycbwlQLi0D0qXHgKnX35BfKkPuhkNe25Ww0pl74Bb5ImsxYK4wRn6GYkZotkz3nkxzpBkRQ/exec')
			.then(() => {})
			.catch(() => {});
	}, []);

	return (
		<div className={`${isDark ? 'dark' : ''}`}>
			<div id="app" className="App  min-h-screen text-dark dark:text-light bg-light dark:bg-dark ">
				{routes}
			</div>
		</div>
	);
}

export default App;
