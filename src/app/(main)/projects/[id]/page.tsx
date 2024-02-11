"use client";

import { FC, useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import FadeUpComponent from "@/components/fade-up-component";
import ImageSlideShow from "@/components/image-slideshow";
import useLoaded from "@/hooks/use-loaded";
import { IProject } from "@/interfaces/project";
import { useRootContext } from "@/contexts/root";
import { ENV_CDN_PORTFOLIO_BASE_URL } from "@/utils/constants";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface ProjectDetailProps {}

const ProjectDetail: FC<ProjectDetailProps> = () => {
	const id = useParams<{ id: string }>().id;
	const idx = parseInt(id!);
	const navigate = useRouter();

	const { projects } = useRootContext();
	const isLoaded = useLoaded();
	const [project, setProject] = useState<IProject>();
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		if (!projects) return;

		const temp = projects[idx];
		if (!temp) {
			navigate.replace("/projects");
			return;
		}

		setProject(temp);
	}, [projects]);

	useEffect(() => {
		if (!project) return;

		const temp: string[] = [];
		for (let i = 1; i <= project.imageCount; i++) {
			const img = `${ENV_CDN_PORTFOLIO_BASE_URL}/project-imgs/${project.imageDir}/${i}.png`;
			temp.push(img);
		}
		setImages(temp);
	}, [project]);

	if (!project) return <div>Loading...</div>;

	return (
		<div className={`${isLoaded ? "fade-start" : ""} pt-4 pb-32 flex flex-col gap-4`}>
			<FadeUpComponent order={1}>
				<div className="flex justify-end w-full sm:justify-start">
					<Link href="/projects" className="neu-out hover:text-color0 w-fit px-4 py-1 rounded-3xl flex items-center">
						<BiLeftArrowAlt className="text-2xl" />
						Back to Projects
					</Link>
				</div>
			</FadeUpComponent>
			<FadeUpComponent order={1}>
				<ImageSlideShow images={images} />
			</FadeUpComponent>
			<FadeUpComponent order={2}>
				<div className="w-full flex gap-2 sm:gap-4">
					{project.repositories.map((repo, idx) => {
						return (
							<a key={idx} href={repo.url} target="_blank" className="flex items-center gap-2 rounded-2xl py-1 px-3 neu-out hover:text-color0 text-xl">
								{repo.type === "app" ? <IoRocketSharp className="text-color0" /> : <FaGithub className="text-color0" />}
								<span className="font-semibold text-sm underline">{repo.label || "Source Code"}</span>
							</a>
						);
					})}
				</div>
			</FadeUpComponent>
			<FadeUpComponent order={2}>
				<div className="w-full neu-in rounded-xl px-4 py-3">
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
			</FadeUpComponent>
			<FadeUpComponent order={3}>
				<div className="w-full neu-in px-4 py-3 rounded-xl">
					<span className="whitespace-pre-wrap">{project?.description}</span>
				</div>
			</FadeUpComponent>
		</div>
	);
};

export default ProjectDetail;
