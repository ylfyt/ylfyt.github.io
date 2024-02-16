<script lang="ts">
    import '@/index.css';
    import { browser } from '$app/environment';
    import { isDark } from '@/stores/theme';

    $: if (browser) {
        $isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }
</script>

{#if browser}
    <slot />
{/if}
