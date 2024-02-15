<script lang="ts">
    import ProfileOverview from '@/components/profile-overview.svelte';
    import LessProject from '@/components/less-project.svelte';
    import FadeUpComponent from '@/components/fade-up-component.svelte';
    import { projects } from '@/stores/projects';
    import type { Project } from '@/types/project';
    import { onMount } from 'svelte';

    let isLoaded = false;
    onMount(async () => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);
    });

    let lessProjects: Project[] = [];
    $: if ($projects.length > 0) {
        lessProjects = $projects.slice(0, 2);
    }
</script>

<div class={`${isLoaded ? 'fade-start' : ''} flex flex-col gap-8 pb-24 pt-4`}>
    <ProfileOverview />
    {#if lessProjects.length > 0}
        <FadeUpComponent order={2} mobileOrder={3}>
            <LessProject projects={lessProjects} />
        </FadeUpComponent>
    {/if}
</div>
