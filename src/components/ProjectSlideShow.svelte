<script lang="ts">
	import type { IProject } from 'src/interfaces/IProject';
	import { fade } from 'svelte/transition';
	import PlayPauseToggle from './PlayPauseToggle.svelte';
	export let project: IProject;

	let play = true;
	let imgIdx = 0;

	const toggle = (
		_?: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	): void => {
		play = !play;
		if (play) {
			changeImage();
		}
	};

	const changeImage = () => {
		if (play) {
			imgIdx++;
			if (imgIdx >= project.images.length) {
				imgIdx = 0;
			}

			if (imgIdx < 0) {
				imgIdx = project.images.length - 1;
			}
		}

		if (play) {
			setTimeout(changeImage, 1000);
		}
	};

	setTimeout(changeImage, 1000);
</script>

<div class="slide-show" in:fade>
	<div class="img-container glass">
		<img class="project-img" src={project.images[imgIdx]} alt="" />
		<div class="show-controller">
			<PlayPauseToggle {play} {toggle} />
		</div>
	</div>
	<div class="project-detail glass">
		{#if project.tags.length > 0}
			<div class="project-tags">
				{#each project.tags as tag}
					<div class="project-tag">{tag}</div>
				{/each}
			</div>
		{/if}
		<div>{project.description}</div>
	</div>
</div>

<style>
	.show-controller {
		position: absolute;
		display: flex;
		gap: 25px;
		bottom: 20px;
		right: 20px;
	}
	.img-container {
		position: relative;
		min-width: 70%;
		max-width: 70%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80vh;
	}

	.project-detail {
		max-height: 80vh;
		height: 80vh;
		width: 100%;
	}
	.project-img {
		max-height: 75vh;
		max-width: 100%;
	}

	.slide-show {
		display: flex;
		align-items: center;
		gap: 20px;
		width: 100%;
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
		font-size: small;
	}
</style>
