<script lang="ts">
	import type { IProject } from '../interfaces/IProject';
	import { scale } from 'svelte/transition';

	export let project: IProject;

	let idx = 0;
	let img = project.images[0];
	const changeImg = () => {
		img = project.images[idx];
		idx++;
		if (idx > project.images.length - 1) {
			idx = 0;
		}
		setTimeout(changeImg, 2000);
	};
	changeImg();
</script>

<a class="project-card glass" href={project.repository} target="_blank" in:scale>
	<img src={img} alt="" />
	{#if project.tags.length > 0}
		<div class="project-tags">
			{#each project.tags as tag}
				<div class="project-tag">{tag}</div>
			{/each}
		</div>
	{/if}
	<div class="description text-regular">
		{project.description}
	</div>
</a>

<style>
	.project-card {
		width: 250px;
		height: 400px;
		text-align: center;
	}

	.project-card:hover {
		cursor: pointer;
	}
	.project-card img {
		max-width: 100%;
		max-height: 50%;
	}
	.description {
		text-align: start;
		margin-top: 0;
	}

	.project-tags {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		flex-wrap: wrap;
		font-size: 10px;
		gap: 10px;
	}

	.project-tag {
		padding: 2px 4px;
		border-radius: 5px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	}

	a {
		text-decoration: none;
		color: black;
	}

	@media (max-width: 620px) {
		.project-card {
			width: 46%;
			min-height: 400px;
			height: fit-content;
		}
	}
</style>
