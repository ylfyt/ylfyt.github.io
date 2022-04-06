export interface IRepository {
	label?: string;
	url: string;
}

export interface IProject {
	title: string;
	images: {
		count: number;
		dir: string;
	};
	repositories: IRepository[];
	tags: string[];
	description: string;
}
