<script lang="ts">
    import Spinner from './spinner.svelte';

    export let ariaLabel = '';
    export let isLoading = false;
    export let onClick: (() => void) | undefined = undefined;
    let className = '';
    export { className as class };
</script>

<button
    aria-label={ariaLabel}
    disabled={isLoading}
    on:click={onClick}
    class={`relative focus:outline-2 focus:outline-color0 disabled:cursor-not-allowed disabled:opacity-80 ${className}`}
>
    {#if isLoading}
        <Spinner class="absolute bottom-0 left-0 right-0 top-0 mb-auto ml-auto mr-auto mt-auto fill-color0" />
    {/if}
    <span class={`${!isLoading ? 'visible' : 'invisible'}`}><slot /></span>
</button>
