import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useRootContext } from './contexts/root';
import { COLORS } from './utils/colors';
import { APP_SCRIPT_URL } from './utils/contants';
import MainRoute from './pages/_route';

function getOS() {
	const userAgent = window.navigator.userAgent;
	const platform = window.navigator.platform;
	const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
	const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

	return `${platform} | ${userAgent}`;

	let dev = '';
	for (let i = 0; i < userAgent.length; i++) {
		if (userAgent[i] === ')') {
			for (let j = i - 1; j >= 0; j--) {
				if (userAgent[j] === ';') {
					break;
				}
				dev = userAgent[j] + dev;
			}
			break;
		}
	}

	let os = '';
	if (macosPlatforms.indexOf(platform) !== -1) {
		os = `Mac OS`;
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (/Linux/.test(platform)) {
		os = 'Linux';
	}
	return `${os} |${dev}`;
}

function App() {
	const routes = useRoutes([MainRoute]);
	const { isDark } = useRootContext();

	useEffect(() => {
		if (import.meta.env.DEV) return;
		fetch(APP_SCRIPT_URL, {
			method: 'POST',
			body: JSON.stringify({ dev: getOS() }),
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
