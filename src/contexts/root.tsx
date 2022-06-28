import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
interface IRootContext {
	isDark: boolean;
	toggleDarkMode: () => void;
}

const RootContext = createContext<IRootContext>({
	isDark: false,
	toggleDarkMode() {},
});

export const useRootContext = () => {
	return useContext(RootContext);
};

interface Props {
	children: ReactNode;
}
const RootProvider: FC<Props> = ({ children }) => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const dark = localStorage.getItem('dark');
		if (dark) setIsDark(true);
	});

	const toggleDarkMode = () => {
		const dark = !isDark;
		setIsDark(dark);
		localStorage.setItem('dark', dark ? 'dark' : '');
	};
	return <RootContext.Provider value={{ isDark, toggleDarkMode }}>{children}</RootContext.Provider>;
};

export default RootProvider;
