<script lang="ts">
	import ProjectSlideShow from '../components/ProjectSlideShow.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import { projects } from '../utils/db';
	import ButtonLeft from '../components/ButtonLeft.svelte';
	import ButtonRight from '../components/ButtonRight.svelte';

	let idx = 0;
</script>

<div class="projects slideShow">
	<div class="slide-control">
		<ButtonLeft
			clicked={() => {
				idx--;
				if (idx < 0) idx = projects.length - 1;
			}}
		/>
	</div>
	<div class="container">
		{#each projects as project, id}
			{#if id === idx}
				<ProjectSlideShow {project} />
			{/if}
		{/each}
	</div>
	<div class="slide-control">
		<ButtonRight
			clicked={() => {
				idx++;
				if (idx >= projects.length) idx = 0;
			}}
		/>
	</div>
</div>

<style>
	.slide-control {
		width: 10%;
		display: flex;
		justify-content: center;
	}
	.slideShow {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 80vh;
		width: 100%;
	}
	.container {
		width: 100%;
	}
</style>
