import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, CollectionReference, orderBy} from 'firebase/firestore';
import { db } from '../utils/firebase';
import { IProject } from '../interfaces/project';

interface IRootContext {
	isDark: boolean;
	toggleDarkMode: () => void;
  projects: IProject[] | undefined
}

const RootContext = createContext<IRootContext>({
	isDark: false,
	toggleDarkMode() {},
  projects: [] 
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
			const projectCollection = collection(db, 'projects') as CollectionReference<IProject>;
			const snap = await getDocs(query(projectCollection, orderBy('createdAt')))
      const temp : IProject[] = []
      snap.forEach((project) => {
        temp.push(project.data());
      });
      setProjects(temp);
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
