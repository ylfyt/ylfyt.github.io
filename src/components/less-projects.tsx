import { FC } from 'react';
import { IProject } from '../interfaces/IProject';
import NavItem from './nav-item';
import ProjectCard from './project-card';

interface LessProjectsProps {
	projects: IProject[];
}

const LessProjects: FC<LessProjectsProps> = ({ projects }) => {
	return (
		<div className="neu-in px-5 py-2 pb-4 rounded-2xl flex flex-col gap-4">
			<div className="text-2xl font-semibold">Favorite Projects</div>
			<div className="grid sm:grid-cols-2 gap-4">
				{projects.map((project, idx) => {
					return <ProjectCard key={idx} idx={idx} project={project} />;
				})}
			</div>
			<div className="flex justify-center">
				<NavItem to="/projects" className="text-sm neu-out hover:text-color0 px-20 py-1">
					See More
				</NavItem>
			</div>
		</div>
	);
};

export default LessProjects;
