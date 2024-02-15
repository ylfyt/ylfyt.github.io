<script lang="ts">
    import FadeUpComponent from '@/components/fade-up-component.svelte';
    import ProjectCard from '@/components/project-card.svelte';
    import { projects } from '@/stores/projects';
    import { onMount } from 'svelte';

    let isLoaded = false;
    onMount(async () => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);
    });
</script>

<div class={`${isLoaded ? 'fade-start' : ''} flex flex-col gap-4 pb-32 pt-4`}>
    <FadeUpComponent order={1}>
        <div class="flex w-full justify-start sm:hidden">
            <div class="neu-out flex w-fit items-center rounded-3xl px-4 py-1 font-semibold text-color0">Projects</div>
        </div>
    </FadeUpComponent>
    <div class={`grid grid-cols-1 gap-5 sm:grid-cols-2`}>
        {#each $projects as project, idx (idx)}
            <FadeUpComponent order={idx < 2 ? 1 : idx < 4 ? 2 : 3} mobileOrder={idx < 1 ? 1 : idx < 2 ? 2 : 3}>
                <ProjectCard {idx} {project} />
            </FadeUpComponent>
        {/each}
    </div>
</div>
