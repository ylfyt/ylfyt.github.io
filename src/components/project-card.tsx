import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IProject } from '../interfaces/IProject';

interface ProjectCardProps {
	project: IProject;
	idx: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, idx }) => {
	return (
		<NavLink to={`/projects/${idx}`} className="animate-scaleUp neu-out hover:neu-out-long transition-shadow py-3 px-4 rounded-lg flex flex-col gap-3 cursor-pointer">
			<div className="flex justify-center">
				<div className="aspect-video flex items-center justify-center w-full">
					<img className="max-h-full" src={`${project.images.dir}/1.png`} alt="" />
				</div>
			</div>
			<div className="flex flex-col py-2 rounded-xl">
				<span className="font-semibold">{project.title}</span>
				<div className="mt-2 flex gap-2 text-color0 font-semibold text-[10px] flex-wrap">
					{project.tags.map((tag, idx) => {
						return (
							<div key={idx} className="neu-in w-fit h-fit px-2 py-1 rounded-md">
								{tag}
							</div>
						);
					})}
				</div>
			</div>
		</NavLink>
	);
};
//
export default ProjectCard;
