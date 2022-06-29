import { FC } from 'react';
import ProjectCard from '../../components/project-card';
import { projects } from '../../utils/db';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
	return (
		<div className="pt-4 pb-32 flex flex-col gap-4">
			<div className="flex justify-start sm:hidden">
				<div className="neu-out text-color0 w-fit px-4 py-1 rounded-3xl flex items-center font-semibold">Projects</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{projects.map((project, idx) => {
					return <ProjectCard key={idx} idx={idx} project={project} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
