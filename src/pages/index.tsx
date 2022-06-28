import { FC } from 'react';
import LessProjects from '../components/less-projects';
import ProfileOverview from '../components/profile-overview';
import { projects as oldProjects } from '../utils/db';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const projects = oldProjects.slice(0, 2);

	return (
		<div className="pt-4 pb-24 flex flex-col gap-8">
			<ProfileOverview />
			<LessProjects projects={projects} />
		</div>
	);
};

export default Home;
