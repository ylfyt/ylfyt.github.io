import type { IProject } from 'src/interfaces/IProject';

const PROJECT_IMG_DIR = './img/projects';

const dbProjects: IProject[] = [
	{
		title: 'Website Portfolio',
		images: {
			count: 3,
			dir: '/ylfyt'
		},
		repository: 'https://github.com/ylfyt/ylfyt.github.io',
		tags: ['Svelte', 'Typescript', 'Vite'],
		description:
			'Website portfolio yang dibuat dengan menggunakan framework Svelte dan bahasa Typescript. Pada website ini menggunakan Vite sebagai build tools-nya'
	},
	{
		title: 'Glassmorphism Portfolio Website',
		images: {
			count: 1,
			dir: '/glassmorphism'
		},
		repository: 'https://github.com/ylfyt/Glassmorphism-Portfolio-Website',
		tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
		description:
			'Website portfoilio Glassmorphism. Website ini dibuat dengan menggunakan HTML, CSS, Javascript, dan Bootstrap'
	},
	{
		title: 'Path finding using A-Star algorithm.',
		images: {
			count: 1,
			dir: '/pathfinding'
		},
		repository: 'https://github.com/ylfyt/A-Star_Hospital-Recommendation',
		tags: ['Java', 'JavaFX'],
		description:
			'Path finding dengan menggunakan Algoritmat A*. Aplikasi ini dibuat dengan menggunakan Java dengan Framework JavaFX'
	},
	{
		title: 'Friend Recommendation System',
		images: {
			count: 1,
			dir: '/friendrecommendation'
		},
		repository: 'https://github.com/ylfyt/Tubes2_13519009',
		tags: ['C#', '.NET'],
		description:
			'Friend Recommendation System dengan menggunakan Algoritma DFS and BFS. Aplikasi ini merupakan aplikasi desktop yang dibuat dengan menggunakan Visual Studio C# Windows Form App (.NET Framework). Aplikasi ini digunakan untuk '
	},
	{
		title: 'Perlu Dilindungi',
		images: {
			count: 5,
			dir: '/perlu-dilindungi'
		},
		repository: 'https://github.com/ylfyt/perlu-dilindungi-android-app',
		tags: ['Kotlin', 'Android'],
		description: 'PerluDilindungi App, create with kotlin android'
	},
	{
		title: 'Chrome Tabs Media Controller Extension',
		images: {
			count: 2,
			dir: '/tab-controller'
		},
		repository: 'https://github.com/ylfyt/chrome-tabs-media-controller-extension',
		tags: ['Javascript', 'Chrome'],
		description: 'Media controller for google chrome browser'
	},
	{
		title: 'Led strips system',
		images: {
			count: 1,
			dir: '/led-strips'
		},
		repository: 'https://github.com/ylfyt/led-strips-system',
		tags: ['C++', 'ESP8266', 'Arduino'],
		description: 'Led strips system'
	}
];

export const projects: IProject[] = dbProjects.map((project) => {
	project.images.dir = PROJECT_IMG_DIR + project.images.dir + '/';
	return project;
});
