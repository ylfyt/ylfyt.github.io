<script lang="ts">
	import ProjectSlideShow from '../components/ProjectSlideShow.svelte';
	import { projects } from '../utils/db';
	import ButtonLeft from '../components/ButtonLeft.svelte';
	import ButtonRight from '../components/ButtonRight.svelte';

	let idx = 0;
</script>

<div class="projects">
	<div class="slide-control controlLeft">
		<ButtonLeft
			clicked={() => {
				idx--;
				if (idx < 0) idx = projects.length - 1;
			}}
		/>
	</div>
	<div class="container">
		<div class="indicator-container">
			{#each projects as _, i}
				{#if i === idx}
					<button class="indicator glass showing" on:click={() => (idx = i)} />
				{:else}
					<button class="indicator glass" on:click={() => (idx = i)} />
				{/if}
			{/each}
		</div>
		{#each projects as project, id}
			{#if id === idx}
				<ProjectSlideShow {project} />
			{/if}
		{/each}
	</div>
	<div class="slide-control controlRight">
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
		display: flex;
		justify-content: center;
	}
	.projects {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 80vh;
		width: 100%;
		gap: 10px;
	}
	.container {
		position: relative;
		width: 100%;
	}

	.indicator-container {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -20px);
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.indicator {
		width: 13px;
		height: 13px;
		border: none;
		border-radius: 50%;
		padding: 0;
	}

	.indicator:hover {
		cursor: pointer;
	}

	.showing {
		background-color: white;
		padding: 8px;
	}

	@media (max-width: 620px) {
		.projects {
			flex-direction: column;
		}

		.slide-control {
			position: absolute;
			bottom: 0;
			width: 20%;
		}

		.controlLeft {
			left: 10px;
		}

		.controlRight {
			right: 10px;
		}

		.indicator-container {
			top: 100%;
			transform: translate(-50%, 2px);
		}

		.indicator {
			width: 10px;
			height: 10px;
			border: none;
			border-radius: 50%;
			padding: 0;
		}
	}
</style>
