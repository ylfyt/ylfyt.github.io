import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
interface IRootContext {
	isDark: boolean;
	isMobile: boolean;
	toggleDarkMode: () => void;
}

const RootContext = createContext<IRootContext>({
	isDark: false,
	isMobile: false,
	toggleDarkMode() {},
});

export const useRootContext = () => {
	return useContext(RootContext);
};

interface Props {
	children: ReactNode;
}
const RootProvider: FC<Props> = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const dark = localStorage.getItem('dark');
		if (dark) setIsDark(true);
	});

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsMobile(window.innerWidth < 640);
		});
		return () => window.removeEventListener('resize', () => {});
	}, []);

	const toggleDarkMode = () => {
		const dark = !isDark;
		setIsDark(dark);
		localStorage.setItem('dark', dark ? 'dark' : '');
	};

	return <RootContext.Provider value={{ isMobile, isDark, toggleDarkMode }}>{children}</RootContext.Provider>;
};

export default RootProvider;
