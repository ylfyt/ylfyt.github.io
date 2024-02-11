"use client";
import { FC, useEffect, useState } from "react";
import FadeUpComponent from "@/components/fade-up-component";
import LessProjects from "@/components/less-projects";
import ProfileOverview from "@/components/profile-overview";
import useLoaded from "@/hooks/use-loaded";
import { IProject } from "@/interfaces/project";
import { useRootContext } from "@/contexts/root";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const { projects: oldProjects } = useRootContext();
	const [projects, setProjects] = useState<IProject[]>([]);

	useEffect(() => {
		if (!oldProjects) return;
		const temp = oldProjects.slice(0, 2);
		setProjects(temp);
	}, [oldProjects]);

	const isLoaded = useLoaded();
	return (
		<div className={`${isLoaded ? "fade-start" : ""} pt-4 pb-24 flex flex-col gap-8`}>
			<ProfileOverview />
			{projects?.length > 0 && (
				<FadeUpComponent order={2} mobileOrder={3}>
					<LessProjects projects={projects} />
				</FadeUpComponent>
			)}
		</div>
	);
};

export default Home;
