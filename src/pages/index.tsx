import { FC, useEffect, useState } from 'react';
import FadeUpComponent from '../components/fade-up-component';
import LessProjects from '../components/less-projects';
import ProfileOverview from '../components/profile-overview';
import useLoaded from '../hooks/use-loaded';
import { IProject } from '../interfaces/project';
import { projects as oldProjects } from '../utils/db';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const [projects, setProjects] = useState<IProject[]>([]);

	useEffect(() => {
		const temp = oldProjects.slice(0, 2);
		setProjects(temp);
	}, []);

	const isLoaded = useLoaded();
	return (
		<div className={`${isLoaded ? 'fade-start' : ''} pt-4 pb-24 flex flex-col gap-8`}>
			<ProfileOverview />
			<FadeUpComponent order={2} mobileOrder={3}>
				<LessProjects projects={projects} />
			</FadeUpComponent>
		</div>
	);
};

export default Home;
