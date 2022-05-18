<script lang="ts">
	import { Link } from 'svelte-navigator';
</script>

<div class="glass navbar">
	<Link to="/" class="link">
		<div class="nav-brand">Yudi</div>
	</Link>
	<div class="nav-items">
		<Link to="about" class="link">About</Link>
		<Link to="projects" class="link">Projects</Link>
		<Link to="contact" class="link">Contact</Link>
	</div>
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		padding-right: 30px;
		padding-left: 30px;
		margin-bottom: 10px;
		align-items: center;
	}

	.nav-brand {
		font-size: large;
		font-weight: 500;
	}

	.nav-items {
		display: flex;
		gap: 30px;
	}

	:global(.link) {
		text-decoration: none;
		color: black;
	}
	:global(.link:hover) {
		color: white;
	}

	@media (max-width: 620px) {
		.nav-items {
			gap: 10px;
		}

		.navbar {
			padding-left: 15px;
			padding-right: 15px;
		}
	}

	@media (max-width: 400px) {
		.nav-brand {
			font-size: medium;
		}

		.nav-items {
			font-size: small;
		}
	}
</style>
