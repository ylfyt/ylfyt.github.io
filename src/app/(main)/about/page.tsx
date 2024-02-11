'use client'

import { FC } from "react";
import FadeUpComponent from "@/components/fade-up-component";
import useLoaded from "@/hooks/use-loaded";

interface AboutProps {}

const About: FC<AboutProps> = () => {
	const isLoaded = useLoaded();
	return (
		<div className={`${isLoaded ? "fade-start" : ""} flex justify-center items-center h-[87vh]`}>
			<FadeUpComponent order={1}>
				<div className="neu-in px-6 py-3 text-2xl rounded-full font-semibold text-color0">About</div>
			</FadeUpComponent>
		</div>
	);
};

export default About;
