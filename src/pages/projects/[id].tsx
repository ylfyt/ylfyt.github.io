import { FC, useEffect, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import ImageSlideShow from '../../components/ImageSlideshow';
import { IProject } from '../../interfaces/IProject';
import { projects } from '../../utils/db';

interface ProjectDetailProps {}

const ProjectDetail: FC<ProjectDetailProps> = () => {
	const id = useParams<'id'>().id;
	const idx = parseInt(id!);
	const navigate = useNavigate();

	const [project, setProject] = useState<IProject>();

	useEffect(() => {
		const temp = projects[idx];
		if (!temp) return navigate('/projects');

		setProject(temp);
	});

	if (!project) return <div>Loading...</div>;

	return (
		<div className="pt-4 pb-32 flex flex-col gap-4">
			<div className="flex justify-end sm:justify-start">
				<NavLink to="/projects" className="neu-out hover:text-color0 w-fit px-4 py-1 rounded-3xl flex items-center">
					<BiLeftArrowAlt className="text-2xl" />
					Back to Projects
				</NavLink>
			</div>
			<ImageSlideShow images={project.images} />
			<div className="neu-in rounded-xl px-4 py-3">
				<span className="text-2xl">{project?.title}</span>
				<div className="mt-2 flex gap-2 text-color0 font-semibold text-[12px] flex-wrap">
					{project?.tags.map((tag, idx) => {
						return (
							<div key={idx} className="neu-out w-fit h-fit px-2 py-1 rounded-md">
								{tag}
							</div>
						);
					})}
				</div>
			</div>
			<div className="neu-in px-4 py-3 rounded-xl">
				<span>{project?.description}</span>
			</div>
		</div>
	);
};

export default ProjectDetail;
