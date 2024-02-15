<script lang="ts">
    import { page } from '$app/stores';
    import FadeUpComponent from '@/components/fade-up-component.svelte';
    import { projects } from '@/stores/projects';
    import type { Project } from '@/types/project';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { ENV_CDN_PORTFOLIO_BASE_URL } from '@/utils/constants';
    import ImageSlideShow from '@/components/image-slide-show.svelte';

    let project: Project | undefined = undefined;
    let images: string[] = [];
    const getData = () => {
        if ($projects.length === 0) return;
        const idx = parseInt($page.params.id);
        project = $projects[idx];
    };
    $: $projects, getData();
    $: if (project) {
        const temp: string[] = [];
        for (let i = 1; i <= project.imageCount; i++) {
            const img = `${ENV_CDN_PORTFOLIO_BASE_URL}/project-imgs/${project.imageDir}/${i}.png`;
            temp.push(img);
        }
        images = temp;
    }

    let isLoaded = false;
    onMount(async () => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);
    });
</script>

<div class={`${isLoaded ? 'fade-start' : ''} flex flex-col gap-4 pb-32 pt-4`}>
    {#if $projects.length === 0}
        <FadeUpComponent order={1}>
            <div class="text-lg font-semibold text-color0">Loading...</div>
        </FadeUpComponent>
    {:else if !project}
        <FadeUpComponent order={1}>
            <div class="text-lg font-semibold uppercase text-color0">Project Not Found</div>
        </FadeUpComponent>
    {:else}
        <FadeUpComponent order={1}>
            <div class="flex w-full justify-end sm:justify-start">
                <a href="/whoami/projects" class="neu-out flex w-fit items-center rounded-3xl px-4 py-1 hover:text-color0">
                    <Icon icon="mingcute:arrow-left-fill" />
                    Back to Projects
                </a>
            </div>
        </FadeUpComponent>
        <FadeUpComponent order={1}>
            <ImageSlideShow {images} />
        </FadeUpComponent>
        <FadeUpComponent order={2}>
            <div class="flex w-full gap-2 sm:gap-4">
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
        </FadeUpComponent>
        <FadeUpComponent order={2}>
            <div class="neu-in w-full rounded-xl px-4 py-3">
                <span class="text-2xl">{project?.title}</span>
                <div class="mt-2 flex flex-wrap gap-2 text-[12px] font-semibold text-color0">
                    {#each project.tags as tag, idx (idx)}
                        <div class="neu-in h-fit w-fit rounded-md px-2 py-1">
                            {tag}
                        </div>
                    {/each}
                </div>
            </div>
        </FadeUpComponent>
        <FadeUpComponent order={3}>
            <div class="neu-in w-full rounded-xl px-4 py-3">
                <span class="whitespace-pre-wrap">{project?.description}</span>
            </div>
        </FadeUpComponent>
    {/if}
</div>
