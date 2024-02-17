<script lang="ts">
    import ProfileOverview from '@/components/profile-overview.svelte';
    import LessProject from '@/components/less-project.svelte';
    import FadeUpComponent from '@/components/fade-up-component.svelte';
    import { projects } from '@/stores/projects';
    import type { Project } from '@/types/project';
    import { onMount } from 'svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    
    let isLoaded = false;
    onMount(async () => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);
    });
</script>

<div class={`${isLoaded ? 'fade-start' : ''} flex flex-col gap-8 pb-24 pt-4`}>
    <ProfileOverview />
    {#if data.favoriteProjects.length > 0}
        <FadeUpComponent order={2} mobileOrder={3}>
            <LessProject projects={data.favoriteProjects} />
        </FadeUpComponent>
    {/if}
</div>
