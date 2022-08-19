import { IProject } from '../interfaces/project';

const dbProjects: IProject[] = [
	{
		title: 'Easy Paste',
		images: {
			count: 2,
			dir: '/easy-paste',
		},
		repositories: [
			{ url: 'https://easy-paste.web.app', label: 'App', type: 'app' },
			{
				url: 'https://github.com/ylfyt/fast-paste',
				label: 'Code',
				type: 'code',
			},
		],
		tags: ['Firebase', 'Svelte', 'Typescript', 'Vite'],
		description: `Feature: 
    - Copy & Paste text
    - Upload file (max 5MB)
    - Login with google for private paste room

Made with Svelte + Vite + TS + Firebase`,
	},
	{
		title: 'ASP.NET Auth Service',
		images: {
			count: 4,
			dir: '/asp-net-auth-service',
		},
		description: `Auth Service using ASP.NET with Refresh and Blacklist Token Mechanism for invalidate access token when user signed out \nFeatures :
    - Register
    - Login
    - Verify Access Token
    - Refresh Token
    - Logout
    - Logout from All Devies
    `,
		repositories: [
			{
				url: 'https://github.com/ylfyt/auth-service',
				type: 'code',
			},
		],
		tags: ['ASP.NET', 'C#', 'EntityFramework', 'JWT', 'Postgresql'],
	},
	{
		title: 'Led strips system',
		images: {
			count: 4,
			dir: '/led-strips',
		},
		repositories: [
			{ label: 'System', url: 'https://github.com/ylfyt/led-strips-system' },
			{ label: 'App', url: 'https://github.com/ylfyt/led-strips-controller' },
		],
		tags: ['C++', 'Typescript', 'React', 'ESP8266', 'Arduino', 'AsyncWebServer'],
		description:
			'Led strips lights. Led strip yang dibuat dengan menggunakan NodeMCU (ESP8266) sebagai microcontroller dan komunikasinya. Sistem led strip ini menyediakan web server yang dibuat dengan menggunakan library AsyncWebServer, sehingga dapat dikontrol dengan menggunakan protokol http. Led strip ini dikontrol dengan sebuah web app yang dibuat dengan menggunakan framework ReactJs dan bahasa Typescript.',
	},
	{
		title: 'Virus Game',
		tags: ['VirusGame', 'Survival', 'Unity', 'C#'],
		images: {
			count: 4,
			dir: '/virus-game',
		},
		repositories: [{ url: 'https://github.com/ylfyt/virus-game' }],
		description: `Virus Game. Game bertemakan virus. Pemain akan berada di tengah layar dan bertahan melawan serangan pada virus. Player dapat menembak virus dengan menekan left mouse atau spacebar. Game mode yang tersedia adalah endless dan wave mode. Selain itu tersedia power up system (not implemented yet), supaya player dapat terus bertahan melawan banyaknya virus. Game ini dibuat dengan menggunakan game engine unity 3d. Thanks to My Partner, CR✨`,
	},
	{
		title: 'Acrylic Lamp',
		images: {
			count: 6,
			dir: '/acrylic-lamp',
		},
		repositories: [{ url: 'https://github.com/ylfyt/Acrylic-Lamp-System' }],
		tags: ['Arduino', 'Fusion360', 'FastLED', 'Bluetooth'],
		description:
			'Acrylic lamp dengan menggunakan arduino uno sebagai microcontroller. Led yang yang digunakan adalah Addressable Led WS2812b. Untuk mengontrol led tersebut digunakan library FastLED. Acrylic lamp ini menggunakan 2 jenis controller untuk pengguna, pertama yaitu touch sensor dan yang kedua adalah secara wireless dengan menggunakan aplikasi android yang terhubung melalui bluetooth. Aplikasi android tersebut dibuat dengan menggunakan platform kodular.io. Sedangkan base yang menjadi tempat acrylicnya dibuat dengan menggunakan Fusion360, lalu dicetak dengan menggunakan 3d printer.',
	},
	{
		title: 'Website Portfolio',
		images: {
			count: 3,
			dir: '/ylfyt',
		},
		repositories: [{ url: 'https://github.com/ylfyt/ylfyt.github.io' }],
		tags: ['Svelte', 'Typescript', 'Vite', 'Glassmorphism'],
		description:
			'Website portfolio yang dibuat dengan menggunakan framework Svelte dan bahasa Typescript. Design dari website ini adalah Glass Morphism website. Build tools yang digunakan adalah Vite.',
	},
	{
		title: 'Led strips system',
		images: {
			count: 4,
			dir: '/led-strips',
		},
		repositories: [
			{ label: 'System', url: 'https://github.com/ylfyt/led-strips-system' },
			{ label: 'App', url: 'https://github.com/ylfyt/led-strips-controller' },
		],
		tags: ['C++', 'Typescript', 'React', 'ESP8266', 'Arduino', 'AsyncWebServer'],
		description:
			'Led strips lights. Led strip yang dibuat dengan menggunakan NodeMCU (ESP8266) sebagai microcontroller dan komunikasinya. Sistem led strip ini menyediakan web server yang dibuat dengan menggunakan library AsyncWebServer, sehingga dapat dikontrol dengan menggunakan protokol http. Led strip ini dikontrol dengan sebuah web app yang dibuat dengan menggunakan framework ReactJs dan bahasa Typescript.',
	},
	{
		title: 'GraphQL API (e-Commerce)',
		images: {
			count: 3,
			dir: '/custom-it',
		},
		repositories: [
			{ label: 'Server', url: 'https://github.com/ylfyt/custom-it-server' },
			{ label: 'Frontend', url: 'https://github.com/ylfyt/custom-it-frontend' },
		],
		tags: ['Express', 'Typescript', 'GraphQl', 'MongoDb', 'React'],
		description:
			'GraphQL API (e-commerce). API untuk aplikasi e-commerce dengan menggunakan GraphQL. API Server dibuat dengan menggunakan bahasa Typescript dan framework ExpressJs. Beberapa module yang digunakan adalah Type-Graphql, Apollo-Server, MikroORM dan MongoDb sebagai databasenya. Selain itu Aplikasi ini juga menyediakan frontend app yang dibuat dengan menggunakan ReactJs. ',
	},
	{
		title: 'Customyx',
		images: {
			count: 4,
			dir: '/customyx',
		},
		repositories: [{ url: 'https://github.com/ylfyt/HMElse' }],
		tags: ['Svelte', 'SvelteKit', 'Vite', 'TailwindCSS', 'Netlify'],
		description:
			'Customyx. Customyx adalah website e-commerce khusus menjual barang-barang custom atau DIY. Aplikasi ini hanya berupa frontend (belum ada server). Terdapat beberapa halaman seperti homepage, list product, detail product, dan about. Aplikasi dibuat dengan menggunakan framework Svelte, dan SvelteKit, serta untuk styling menggunakan TailwindCSS. Sedangkan build tools yang digunakan adalah Vite. Customyx sudah di-deploy ke netlify dan dapat diakses pada link https://customyx.netlify.app',
	},
	{
		title: 'Mood Lamp',
		images: {
			count: 5,
			dir: '/mood-lamp',
		},
		repositories: [{ url: 'https://github.com/ylfyt/moodlamp-with-async-effect' }],
		tags: ['Arduino', 'FastLED', 'Bluetooth'],
		description:
			'Mood lamp ini dibuat dengan menggunakan arduino uno sebagai microcontrollernya. Led yang digunakan adalah Addressable Led ws2812b dengan library untuk animasinya menggunakan FastLED. Animasi pada moodlamp ini merupakan modifikasi dari animasi berikut. Modifikasi yang dilakukan adalah mengganti penggunaan delay dengan millis. Hal ini bertujuan untuk mengatasi masalah ketika perlunya membaca nilai komunikasi serial, karena lampu ini dilengkapi dengan sensor bluetooth yang dapat terhubung ke android dengan menggunakan aplikasi yang dibuat dengan kodular.io.',
	},
	{
		title: 'Glassmorphism Portfolio Website',
		images: {
			count: 1,
			dir: '/glassmorphism',
		},
		repositories: [{ url: 'https://github.com/ylfyt/Glassmorphism-Portfolio-Website' }],
		tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Glassmorphism'],
		description: 'Website Portfolio Glass Morphism. Website ini dibuat dengan menggunakan vanilla HTML, CSS, Javascript, dan sedikit tambahan Bootstrap.',
	},
	{
		title: 'Color Switch Clone',
		tags: ['ColorSwitch', 'Unity', 'C#'],
		images: {
			count: 3,
			dir: '/color-switch-clone',
		},
		repositories: [{ url: 'https://github.com/ylfyt/color-switch-clone' }],
		description: 'Color Switch Clone. Kloning atau membuat ulang game color switch. Game ini dibuat dengan menggunakan Game Engine Unity 3d.',
	},
	{
		title: 'Chrome Tabs Media Controller Extension',
		images: {
			count: 2,
			dir: '/tab-controller',
		},
		repositories: [{ url: 'https://github.com/ylfyt/chrome-tabs-media-controller-extension' }],
		tags: ['Chrome', 'Extension', 'Javascript'],
		description:
			'Chrome Tabs Media Controller Extension. Media controller untuk browser chrome dan edge. Extension ini dibuat dengan menggunakan javascript dengan manifest versi 2. Fitur yang dimiliki adalah mute/unmute tab’s audio dan play/pause youtube tabs.',
	},
	{
		title: 'Perlu Dilindungi Android App',
		images: {
			count: 5,
			dir: '/perlu-dilindungi',
		},
		repositories: [{ url: 'https://github.com/ylfyt/perlu-dilindungi-android-app' }],
		tags: ['Android', 'Kotlin'],
		description:
			'Perlu Dilindungi App. Aplikasi ini merupakan aplikasi android yang memiliki beberapa fitur seperti mencari daftar berita tentang covid, mencari faskes terdekat, bookmark, dan melakukan check in. Bahasa yang digunakan adalah kotlin. Aplikasi ini dibuat untuk memenuhi tugas mata kuliah Pengembangan Aplikasi pada Platform Khusus.',
	},
	{
		title: 'Pathfinder using the A* algorithm.',
		images: {
			count: 1,
			dir: '/pathfinding',
		},
		repositories: [{ url: 'https://github.com/ylfyt/A-Star_Hospital-Recommendation' }],
		tags: ['A*', 'Java', 'JavaFX'],
		description: 'Pathfinder dengan menggunakan Algoritma A*. Aplikasi bertujuan untuk mencari jalur terdekat menuju rumah sakit. Bahasa yang digunakan adalah Java dengan Framework JavaFX.',
	},
];

const PROJECT_IMG_DIR = `${import.meta.env.BASE_URL}images/projects`;

export const projects: IProject[] = dbProjects.map((project) => {
	project.images.dir = PROJECT_IMG_DIR + project.images.dir + '';
	return project;
});
