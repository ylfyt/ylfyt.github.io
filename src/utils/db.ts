import type { IProject } from 'src/interfaces/IProject';

const PROJECT_IMG_DIR = './img/projects';

const dbProjects: IProject[] = [
	{
		title: 'Acrylic Lamp',
		images: {
			count: 4,
			dir: '/acrylic-lamp'
		},
		repositories: [{ url: 'https://github.com/ylfyt/Acrylic-Lamp-System' }],
		tags: ['Arduino', 'FastLED', 'IoT'],
		description:
			'Acrylic lamp dengan menggunakan arduino uno sebagai microcontroller. Led yang yang digunakan adalah Addressable Led WS2812b. Untuk mengontrol led tersebut digunakan library FastLED. Acrylic lamp ini menggunakan 2 jenis controller untuk pengguna, pertama yaitu touch sensor dan yang kedua adalah secara wireless dengan menggunakan aplikasi android yang terhubung melalui bluetooth. Aplikasi android tersebut dibuat dengan menggunakan platform kodular.io. Sedangkan base yang menjadi tempat acrylicnya dibuat dengan menggunakan Fusion360, lalu dicetak dengan menggunakan 3d printer.'
	},
	{
		title: 'Custom It E-Commerce',
		images: {
			count: 3,
			dir: '/custom-it'
		},
		repositories: [
			{ label: 'server', url: 'https://github.com/ylfyt/custom-it-server' },
			{ label: 'frontend', url: 'https://github.com/ylfyt/custom-it-frontend' }
		],
		tags: ['Express', 'Typescript', 'GraphQl', 'MongoDb'],
		description:
			'Aplikasi untuk berbelanja barang-barang yang bisa di-custom sesuai keinginan pembeli. Aplikasi ini terdiri dari server dan frontend yang dibuat dengan Typescript. Pada bagian server menggunakan GraphQL sebagai komunikasi API-nya, dan untuk database menggunakan MongoDb dan MikroOrm sebagai Object relational mapping-nya. Selain itu framework yang digunakan adalah ExpressJs.'
	},
	{
		title: 'Website Portfolio',
		images: {
			count: 3,
			dir: '/ylfyt'
		},
		repositories: [{ url: 'https://github.com/ylfyt/ylfyt.github.io' }],
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
		repositories: [{ url: 'https://github.com/ylfyt/Glassmorphism-Portfolio-Website' }],
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
		repositories: [{ url: 'https://github.com/ylfyt/A-Star_Hospital-Recommendation' }],
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
		repositories: [{ url: 'https://github.com/ylfyt/Tubes2_13519009' }],
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
		repositories: [{ url: 'https://github.com/ylfyt/perlu-dilindungi-android-app' }],
		tags: ['Kotlin', 'Android'],
		description: 'PerluDilindungi App, create with kotlin android'
	},
	{
		title: 'Chrome Tabs Media Controller Extension',
		images: {
			count: 2,
			dir: '/tab-controller'
		},
		repositories: [{ url: 'https://github.com/ylfyt/chrome-tabs-media-controller-extension' }],
		tags: ['Javascript', 'Chrome'],
		description: 'Media controller for google chrome browser'
	},
	{
		title: 'Led strips system',
		images: {
			count: 1,
			dir: '/led-strips'
		},
		repositories: [{ url: 'https://github.com/ylfyt/led-strips-system' }],
		tags: ['C++', 'ESP8266', 'Arduino'],
		description: 'Led strips system'
	}
];

export const projects: IProject[] = dbProjects.map((project) => {
	project.images.dir = PROJECT_IMG_DIR + project.images.dir + '/';
	return project;
});
