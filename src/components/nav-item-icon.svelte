<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;
    $: isActive = $page.url.pathname === href;
</script>

<a
    {href}
    class={`${isActive ? 'neu-in text-color0' : 'neu-out hover:text-color0'} flex aspect-square h-[60px] flex-col items-center justify-center rounded-full font-normal`}
>
    <slot name="icon" />
    <slot />
</a>
