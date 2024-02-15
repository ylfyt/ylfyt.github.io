<script lang="ts">
    import NeuIcon from './neu-icon.svelte';

    export let ariaLabel = '';
    export let url: string;
    let className = '';
    export { className as class };
</script>

<a aria-label={ariaLabel} target="_blank" href={url} class="hover:text-color0">
    <NeuIcon class={`p-3 ${className}`}>
        <slot />
    </NeuIcon>
</a>
