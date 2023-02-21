import { FC, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IProject } from '../interfaces/project';
import { getDownloadURL, ref, list } from 'firebase/storage';
import { storage } from '../utils/firebase';

interface ProjectCardProps {
	project: IProject;
	idx: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, idx }) => {
	const [thumbnail, setThumbnail] = useState<string>();

	useEffect(() => {
		(async () => {
			const storageRef = ref(storage, `projects/${project.imageDir}`);
			const res = await list(storageRef);
			if (res.items.length === 0) return;
			const url = await getDownloadURL(res.items[0]);  
			setThumbnail(url);
		})();
	}, []);

	return (
		<div className="group neu-out hover:neu-out-long transition-shadow py-3 px-4 rounded-lg flex flex-col gap-4 w-full">
			<Link to={`/projects/${idx}`} className="flex flex-col gap-2">
				<div className="flex justify-center">
					<div className="aspect-video flex items-center justify-center w-full">
						<img className="max-h-full" src={thumbnail ?? '/images/placeholder.jpg'} alt="" />
					</div>
				</div>
				<div className="flex flex-col rounded-xl">
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
			</Link>
			<div className="flex gap-2 sm:gap-4">
				{project.repositories.map((repo, idx) => {
					return (
						<a key={idx} href={repo.url} target="_blank" className="flex items-center gap-2 rounded-lg py-1 px-3 neu-out hover:text-color0">
							{repo.type === 'app' ? <IoRocketSharp className="text-color0" /> : <FaGithub className="text-color0" />}
							<span className="text-xs font-semibold underline">{repo.label || 'Source Code'}</span>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectCard;
