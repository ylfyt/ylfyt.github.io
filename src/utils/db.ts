import type { IProject } from 'src/interfaces/IProject';

export const projects: IProject[] = [
	{
		title: 'Glassmorphism Portfolio Website',
		images: ['glassmorphism.jpg'],
		repository: 'https://github.com/ylfyt/Glassmorphism-Portfolio-Website',
		tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
		description: 'Glassmorphism Portfolio Website using HTML, CSS, JavaScript, and Bootstrap'
	},
	{
		title: 'Path finding using A-Star algorithm.',
		images: ['pathfinding.gif'],
		repository: 'https://github.com/ylfyt/A-Star_Hospital-Recommendation',
		tags: ['Java', 'JavaFX'],
		description: 'Path finding using A-Star algorithm. This app made with Java and JavaFX'
	},
	{
		title: 'Friend Recommendation System',
		images: ['friendrecommendation.gif'],
		repository: 'https://github.com/ylfyt/Tubes2_13519009',
		tags: ['C#', '.NET'],
		description:
			'Friend Recommendation System using DFS and BFS algorithm. This is a desktop application made with Visual Studio C# Windows Form App (.NET Framework)'
	},
	{
		title: 'RPG Games using JavaFX',
		images: ['oop.gif'],
		repository: 'https://github.com/ylfyt/Orientado-a-Objetos',
		tags: ['Java', 'JavaFX'],
		description:
			'Application of Object Oriented Programming (OOP) concept in RPG Games. This game made with Java and JavaFX'
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
