<script lang="ts">
    import FadeUpComponent from '@/components/fade-up-component.svelte';
    import { onMount } from 'svelte';

    let isLoaded = false;
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);
    });
</script>

<div class={`${isLoaded ? 'fade-start' : ''} flex h-[87vh] items-center justify-center`}>
    <FadeUpComponent order={1}>
        <div class="neu-in rounded-full px-6 py-3 text-2xl font-semibold text-color0">About</div>
    </FadeUpComponent>
</div>
