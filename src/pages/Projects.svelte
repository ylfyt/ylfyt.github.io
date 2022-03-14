<script lang="ts">
	import ProjectCard from '../components/ProjectCard.svelte';
	import { projects } from '../utils/db';
</script>

<div class="projects">
	<div class="projects-container">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.projects {
		width: 100%;
	}
	.projects-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
