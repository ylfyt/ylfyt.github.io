export interface IRepository {
	label?: string;
	type?: 'code' | 'app';
	url: string;
}

export interface IProject {
	title: string;
	imageCount: number;
	imageDir: string;
	repositories: IRepository[];
	tags: string[];
	description: string;
	createdAt?: Date;
}
