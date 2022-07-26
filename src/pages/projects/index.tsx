import { FC } from 'react';
import FadeUpComponent from '../../components/fade-up-component';
import ProjectCard from '../../components/project-card';
import { useRootContext } from '../../contexts/root';
import useLoaded from '../../hooks/use-loaded';
import { projects } from '../../utils/db';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
	const { isMobile } = useRootContext();
	const isLoaded = useLoaded();

	return (
		<div className={`${isLoaded ? 'fade-start' : ''} pt-4 pb-32 flex flex-col gap-4`}>
			<FadeUpComponent className="show-1">
				<div className="flex justify-start w-full sm:hidden">
					<div className="neu-out text-color0 w-fit px-4 py-1 rounded-3xl flex items-center font-semibold">Projects</div>
				</div>
			</FadeUpComponent>
			<div className={`grid grid-cols-1 sm:grid-cols-2 gap-5`}>
				{projects.map((project, idx) => {
					return (
						<FadeUpComponent
							key={idx}
							className={`
              ${idx < 1 ? 'show-1' : idx < 2 ? 'show-2' : 'show-3'}
              sm:${idx < 2 ? 'show-1' : idx < 4 ? 'show-2' : 'show-3'}
            `}
						>
							<ProjectCard idx={idx} project={project} />
						</FadeUpComponent>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
