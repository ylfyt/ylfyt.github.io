<script lang="ts">
	import type { IProject } from 'src/interfaces/IProject';
	import { fade } from 'svelte/transition';
	import PlayPauseToggle from './PlayPauseToggle.svelte';
	export let project: IProject;

	let play = true;
	let imgIdx = 0;

	const SLIDE_DURATION = 2000;

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
			if (imgIdx >= project.images.count) {
				imgIdx = 0;
			}

			if (imgIdx < 0) {
				imgIdx = project.images.count - 1;
			}
		}

		if (play) {
			setTimeout(changeImage, SLIDE_DURATION);
		}
	};

	setTimeout(changeImage, SLIDE_DURATION);
</script>

<div class="slide-show" in:fade>
	<div class="img-container glass">
		<img class="project-img" src={project.images.dir + `${imgIdx + 1}.png`} alt="" />
		<div class="show-controller">
			<div class="imgs-indicator">{imgIdx + 1}/{project.images.count}</div>
			<PlayPauseToggle {play} {toggle} />
		</div>
	</div>
	<div class="project-detail glass">
		{#if project.tags.length > 0}
			<div class="project-tags">
				{#each project.repositories as repo}
					<a class="repo project-tag" target="_blank" href={repo.url}
						>{repo.label ? repo.label : 'github'}</a
					>
				{/each}
				<div />
				{#each project.tags as tag}
					<div class="project-tag">{tag}</div>
				{/each}
			</div>
		{/if}
		<div class="description">{project.description}</div>
	</div>
</div>

<style>
	.show-controller {
		position: absolute;
		display: flex;
		align-items: flex-end;
		gap: 25px;
		bottom: 20px;
		right: 20px;
	}
	.imgs-indicator {
		margin-right: 0px;
		font-size: small;
		color: orange;
	}

	.repo {
		color: orange;
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
		position: relative;
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
		gap: 10px;
		width: 100%;
	}

	.project-tags {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.project-tag {
		padding: 2px 4px;
		border-radius: 5px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
		font-size: small;
	}

	@media (max-width: 960px) {
		.slide-show {
			flex-direction: column;
			max-height: 80vh;
		}

		.project-detail {
			height: 25vh;
			font-size: small;
		}

		.project-tags {
			margin-top: 0;
		}

		.img-container {
			min-width: 100%;
			min-height: 100%;
			min-height: 50vh;
		}

		.project-img {
			max-height: 48vh;
		}

		.show-controller {
			gap: 20px;
			bottom: 10px;
			right: 10px;
		}
	}

	@media (max-width: 620px) {
		.project-tags {
			margin-bottom: 5px;
		}
		.project-tag {
			font-size: xx-small;
		}

		.img-container {
			min-width: 100%;
			height: 38vh;
			min-height: 100%;
		}

		.project-img {
			max-height: 36vh;
		}

		.project-detail {
			height: 37vh;
			font-size: small;
		}
	}
</style>
