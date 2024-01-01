import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { IProject } from '../interfaces/project';
import { ENV_CDN_PORTFOLIO_BASE_URL } from '../utils/constants';

interface IRootContext {
	isDark: boolean;
	toggleDarkMode: () => void;
	projects: IProject[] | undefined;
}

const RootContext = createContext<IRootContext>({
	isDark: false,
	toggleDarkMode() {},
	projects: [],
});

export const useRootContext = () => {
	return useContext(RootContext);
};

interface Props {
	children: ReactNode;
}
const RootProvider: FC<Props> = ({ children }) => {
	const [isDark, setIsDark] = useState(false);
	const [projects, setProjects] = useState<IProject[]>();

	useEffect(() => {
		(async () => {
			try {
				const url = `${ENV_CDN_PORTFOLIO_BASE_URL}/projects.json`;
				const resp = await fetch(url);
				if (!resp.ok) {
					throw new Error(await resp.text());
				}
				const temp: IProject[] = await resp.json();
				setProjects(temp);
			} catch (error) {
				console.log('ERROR', error);
			}
		})();
	}, []);

	useEffect(() => {
		const dark = localStorage.getItem('dark');
		if (dark) setIsDark(true);
	});

	const toggleDarkMode = () => {
		const dark = !isDark;
		setIsDark(dark);
		localStorage.setItem('dark', dark ? 'dark' : '');
	};

	return <RootContext.Provider value={{ projects, isDark, toggleDarkMode }}>{children}</RootContext.Provider>;
};

export default RootProvider;
