<script lang="ts">
    import { isDark } from '@/stores/theme';
    import Button from './button.svelte';
    import NavItemIcon from './nav-item-icon.svelte';
    import Icon from '@iconify/svelte';
</script>

<nav
    class="fixed bottom-0 z-30 flex w-full items-center bg-light py-2 shadow-[-2px_-2px_10px_rgba(0,0,0,0.2)] dark:bg-dark"
>
    <div class="flex flex-1 items-center justify-evenly">
        <NavItemIcon href="/">
            <Icon style="font-size: 1.5em;" icon="fa:home" slot="icon" />
            <span class="text-[10px]">Home</span>
        </NavItemIcon>
        <NavItemIcon href="/projects">
            <Icon style="font-size: 1.5em;" icon="solar:clipboard-bold" slot="icon" />
            <span class="text-[10px]">Project</span>
        </NavItemIcon>
        <NavItemIcon href="/about">
            <Icon style="font-size: 1.5em;" icon="fa:user" slot="icon" />
            <span class="text-[10px]">About</span>
        </NavItemIcon>
        <NavItemIcon href="/contacts">
            <Icon style="font-size: 1.5em;" icon="streamline:phone-solid" slot="icon" />
            <span class="text-[10px]">Contact</span>
        </NavItemIcon>
    </div>
    <div>
        <Button
            onClick={() => isDark.update((prev) => !prev)}
            class="neu-out neu-out-active mr-2 rounded-full p-2 text-yellow-400"
            ariaLabel={$isDark ? 'Swith to light' : 'Switch to dark'}
        >
            {#if $isDark}
                <Icon icon="emojione:crescent-moon" />
            {:else}
                <Icon icon="emojione-v1:sun" />
            {/if}
        </Button>
    </div>
</nav>
