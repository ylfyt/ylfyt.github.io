export type Repository = {
    label?: string;
    type?: 'code' | 'app';
    url: string;
};

export type Project = {
    title: string;
    imageCount: number;
    imageDir: string;
    repositories: Repository[];
    tags: string[];
    description: string;
    createdAt?: Date;
};
