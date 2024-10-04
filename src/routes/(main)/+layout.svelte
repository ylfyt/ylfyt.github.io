<script lang="ts">
    import MainNavbar from '@/components/main-navbar.svelte';
    import MobileNavbar from '@/components/mobile-navbar.svelte';
    import { projects } from '@/stores/projects';
    import type { Project } from '@/types/project';
    import { ENV, ENV_CDN_PORTFOLIO_BASE_URL, ENV_GAS_URL } from '@/utils/constants';
    import { onMount } from 'svelte';

    onMount(async () => {
        if (import.meta.env.PROD) {
            fetch(`${ENV.BACKEND_BASE_URL}/ping`);
            fetch(`${ENV_GAS_URL}`);
        }

        try {
            const url = `${ENV_CDN_PORTFOLIO_BASE_URL}/projects.json`;
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error(await resp.text());
            }
            const temp: Project[] = await resp.json();
            projects.set(temp);
        } catch (error) {
            console.log('ERROR', error);
        }
    });
</script>

<svelte:head>
    <title>Yudi Alfayat</title>
    <meta name="description" content="Yudi Alfayat's Portfolio website" />
</svelte:head>

<div>
    <div class="sticky top-0 z-30 hidden sm:block">
        <MainNavbar />
    </div>
    <div class="z-30 block sm:hidden">
        <MobileNavbar />
    </div>
    <div class="flex justify-center">
        <div class="w-full px-4 md:w-[1024px]">
            <slot />
        </div>
    </div>
</div>
