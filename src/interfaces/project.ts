export interface IRepository {
	label?: string;
	type?: 'code' | 'app';
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
