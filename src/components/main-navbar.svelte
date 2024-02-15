<script lang="ts">
    import { isDark } from '@/stores/theme';
    import Button from './button.svelte';
    import NavItem from './nav-item.svelte';
    import Icon from '@iconify/svelte';
</script>

<nav
    class="sticky top-0 z-40 flex min-h-[60px] justify-center bg-light opacity-90 shadow-md hover:opacity-100 dark:bg-dark"
>
    <div class="flex w-[1024px] items-center justify-between px-12">
        <a href="/" class="text-2xl font-semibold text-color0"> Yudi </a>
        <div class="flex items-center gap-5">
            <Button
                onClick={() => isDark.update((prev) => !prev)}
                class="neu-out neu-out-active rounded-full p-2 text-yellow-400"
            >
                {#if $isDark}
                    <Icon icon="emojione:crescent-moon" />
                {:else}
                    <Icon icon="emojione-v1:sun" />
                {/if}
            </Button>

            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contacts">Contacts</NavItem>
        </div>
    </div>
</nav>
