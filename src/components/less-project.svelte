<script lang="ts">
    import type { Project } from '@/types/project';
    import ProjectCard from './project-card.svelte';
    import NavItem from './nav-item.svelte';

    export let projects: Project[];
</script>

<div class="neu-in flex flex-col gap-4 rounded-2xl px-5 py-2 pb-4">
    <div class="text-2xl font-semibold">Favorite Projects</div>
    <div class="grid gap-4 sm:grid-cols-2">
        {#each projects as project, idx (idx)}
            <ProjectCard {idx} {project} />
        {/each}
    </div>
    <div class="flex justify-center">
        <NavItem href="/projects" class="neu-out px-20 py-1 text-sm hover:text-color0">See More</NavItem>
    </div>
</div>
