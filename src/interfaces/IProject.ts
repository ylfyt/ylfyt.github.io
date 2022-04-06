export interface IProject {
	title: string;
	images: {
		count: number;
		dir: string;
	};
	repository: string;
	tags: string[];
	description: string;
}
