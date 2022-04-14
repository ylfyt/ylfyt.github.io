<script lang="ts">
	import type { IProject } from 'src/interfaces/IProject';

	export let projects: IProject[];
	export let changeIdx: (val: number) => void;
</script>

<div class="modal glass">
	{#each projects as project, idx}
		<div
			class="project glass"
			on:click={() => {
				changeIdx(idx);
			}}
		>
			<div class="image">
				<img src={project.images.dir + '1.png'} alt="pic" />
			</div>
			<div class="title">
				{project.title}
			</div>
		</div>
	{/each}
</div>

<style>
	.modal {
		background-color: rgba(255, 255, 255, 0.8);
		display: flex;
		flex-direction: column;
		gap: 10px;
		max-height: 70vh;
		overflow: hidden;
		padding: 5px;
	}
	.project {
		display: flex;
		margin: 0;
	}
	.project:hover {
		background-color: rgb(217, 190, 241);
		cursor: pointer;
	}
	.image {
		height: 50px;
		width: 100px;
		display: flex;
		justify-content: center;
		margin-right: 10px;
		background-color: rgb(138, 136, 136);
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		height: 100%;
	}
</style>
