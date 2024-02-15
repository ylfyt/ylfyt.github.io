<script lang="ts">
    import type { Project } from '@/types/project';
    import { ENV_CDN_PORTFOLIO_BASE_URL } from '@/utils/constants';
    import Icon from '@iconify/svelte';

    export let idx: number;
    export let project: Project;
</script>

<div class="neu-out hover:neu-out-long group flex w-full flex-col gap-4 rounded-lg px-4 py-3 transition-shadow">
    <a href={`/projects/${idx}`} class="flex flex-col gap-2">
        <div class="flex justify-center">
            <div class="flex aspect-video w-full items-center justify-center">
                <img
                    class="max-h-full"
                    src={`${ENV_CDN_PORTFOLIO_BASE_URL}/project-imgs/${project.imageDir}/1.png`}
                    alt="Project Thumbnail"
                />
            </div>
        </div>
        <div class="flex flex-col rounded-xl">
            <span class="font-semibold">{project.title}</span>
            <div class="mt-2 flex flex-wrap gap-2 text-[10px] font-semibold text-color0">
                {#each project.tags as tag, idx (idx)}
                    <div class="neu-in h-fit w-fit rounded-md px-2 py-1">
                        {tag}
                    </div>
                {/each}
            </div>
        </div>
    </a>
    <div class="flex gap-2 sm:gap-4">
        {#each project.repositories as repo, idx (idx)}
            <a
                href={repo.url}
                target="_blank"
                class="neu-out flex items-center gap-2 rounded-lg px-3 py-1 hover:text-color0"
            >
                {#if repo.type === 'app'}
                    <Icon icon="noto:rocket" />
                {:else}
                    <Icon icon="skill-icons:github-light" />
                {/if}
                <span class="text-xs font-semibold underline">{repo.label || 'Source Code'}</span>
            </a>
        {/each}
    </div>
</div>
