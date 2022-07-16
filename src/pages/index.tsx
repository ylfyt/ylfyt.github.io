import { FC, useEffect, useState } from 'react';
import LessProjects from '../components/less-projects';
import ProfileOverview from '../components/profile-overview';
import { IProject } from '../interfaces/project';
import { projects as oldProjects } from '../utils/db';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const [projects, setProjects] = useState<IProject[]>([]);

	useEffect(() => {
		const temp = oldProjects.slice(0, 2);
		setProjects(temp);
	}, []);

	return (
		<div className="pt-4 pb-24 flex flex-col gap-8">
			<ProfileOverview />
			<LessProjects projects={projects} />
		</div>
	);
};

export default Home;
