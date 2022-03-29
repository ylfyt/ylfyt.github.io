<script lang="ts">
	export let toggle: (
		e?: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => void;
	export let play: boolean;
</script>

<button class="glass" on:click={(e) => toggle(e)}>
	{#if play}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" /></svg
		>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path d="M3 22v-20l18 10-18 10z" /></svg
		>
	{/if}
</button>

<style>
	button {
		border: none;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button:active {
		box-shadow: none;
	}

	button:hover {
		cursor: pointer;
	}

	button:hover > svg path {
		fill: white;
	}
</style>
