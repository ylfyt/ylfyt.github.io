<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Projects from './pages/Projects.svelte';
	import Contact from './pages/Contact.svelte';

	import { Router, Route } from 'svelte-navigator';
</script>

<Router>
	<main>
		<Navbar />
		<div class="content glass">
			<Route path="/">
				<Home />
			</Route>
			<Route path="about">
				<About />
			</Route>
			<Route path="projects">
				<Projects />
			</Route>

			<Route path="contact">
				<Contact />
			</Route>
		</div>
	</main>
</Router>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		transition: all 0.1s ease;
	}

	:global(.glass) {
		background: linear-gradient(
			to right bottom,
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.2)
		);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-left: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 15px;
		padding: 10px;
	}

	:global(.text-title) {
		font-size: 27px;
		font-weight: 500;
	}

	:global(.text-secondary) {
		font-size: 20px;
		font-weight: 500;
	}

	:global(.text-regular) {
		font-size: 15px;
		margin-top: 10px;
	}

	main {
		background-image: linear-gradient(to right bottom, #ffd89b, #19547b);
		background: -webkit-linear-gradient(to left top, #f64f59, #c471ed, #12c2e9);
		background: linear-gradient(to left top, #f64f59, #c471ed, #12c2e9);
		padding: 20px;
		display: flex;
		flex-direction: column;
		min-height: 100%;
		position: absolute;
		width: 100%;
	}

	.content {
		padding: 10px 20px;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 620px) {
		main {
			padding: 10px;
		}

		.content {
			align-items: stretch;
		}
	}
</style>
