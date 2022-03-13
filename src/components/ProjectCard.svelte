<script lang="ts">
	import type { IProject } from '../interfaces/IProject';
	export let project: IProject;
</script>

<div class="project-card glass">
	<img src="./img/projects/{project.images[0]}" alt="" />
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
</div>

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
</style>
