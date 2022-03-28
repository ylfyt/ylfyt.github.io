import type { IProject } from 'src/interfaces/IProject';

export const projects: IProject[] = [
	{
		title: 'Glassmorphism Portfolio Website',
		images: ['glassmorphism.jpg'],
		repository: 'https://github.com/ylfyt/Glassmorphism-Portfolio-Website',
		tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
		description:
			'Website portfoilio Glassmorphism. Website ini dibuat dengan menggunakan HTML, CSS, Javascript, dan Bootstrap'
	},
	{
		title: 'Website Portfolio',
		images: ['ylfyt/1.png', 'ylfyt/2.png', 'ylfyt/3.png'],
		repository: 'https://github.com/ylfyt/ylfyt.github.io',
		tags: ['Svelte', 'Typescript', 'Vite'],
		description:
			'Website portfolio yang dibuat dengan menggunakan framework Svelte dan bahasa Typescript. Pada website ini menggunakan Vite sebagai build tools-nya'
	},
	{
		title: 'Path finding using A-Star algorithm.',
		images: ['pathfinding.gif'],
		repository: 'https://github.com/ylfyt/A-Star_Hospital-Recommendation',
		tags: ['Java', 'JavaFX'],
		description:
			'Path finding dengan menggunakan Algoritmat A*. Aplikasi ini dibuat dengan menggunakan Java dengan Framework JavaFX'
	},
	{
		title: 'Friend Recommendation System',
		images: ['friendrecommendation.gif'],
		repository: 'https://github.com/ylfyt/Tubes2_13519009',
		tags: ['C#', '.NET'],
		description:
			'Friend Recommendation System dengan menggunakan Algoritma DFS and BFS. Aplikasi ini merupakan aplikasi desktop yang dibuat dengan menggunakan Visual Studio C# Windows Form App (.NET Framework). Aplikasi ini digunakan untuk '
	},
	{
		title: 'Perlu Dilindungi',
		images: [
			'perlu-dilindungi/1.png',
			'perlu-dilindungi/2.png',
			'perlu-dilindungi/3.png',
			'perlu-dilindungi/4.png',
			'perlu-dilindungi/5.png'
		],
		repository: 'https://github.com/ylfyt/perlu-dilindungi-android-app',
		tags: ['Kotlin', 'Android'],
		description: 'PerluDilindungi App, create with kotlin android'
	},
	{
		title: 'Chrome Tabs Media Controller Extension',
		images: ['tab-controller/1.png', 'tab-controller/2.png'],
		repository: 'https://github.com/ylfyt/chrome-tabs-media-controller-extension',
		tags: ['Javascript', 'Chrome'],
		description: 'Media controller for google chrome browser'
	},
	{
		title: 'Led strips system',
		images: ['led-strips/1.jpeg'],
		repository: 'https://github.com/ylfyt/led-strips-system',
		tags: ['C++', 'ESP8266', 'Arduino'],
		description: 'Led strips system'
	}
];
