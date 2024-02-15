<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;
    let className = '';
    export { className as class };

    $: isActive = $page.url.pathname === href;
</script>

<a
    {href}
    class={`${isActive ? 'neu-in text-color0' : 'hover:neu-out'} active:neu-in rounded-lg px-5 py-2 font-semibold ${className}`}
>
    <slot />
</a>
