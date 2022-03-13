<script lang="ts">
	import { Link } from 'svelte-navigator';
</script>

<div class="glass navbar">
	<Link to="/" class="link">
		<div class="nav-brand">Yudi Alfayat</div>
	</Link>
	<div class="nav-items">
		<Link to="about" class="link">About</Link>
		<div>Projects</div>
		<div>Contact</div>
	</div>
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		padding-right: 30px;
		padding-left: 30px;
		margin-bottom: 10px;
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
</style>
