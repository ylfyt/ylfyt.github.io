<script lang="ts">
    export let order: number;
    export let mobileOrder: number | undefined = undefined;
    mobileOrder = mobileOrder ?? order;
</script>

<div
    class={`use-transition show flex w-full items-center justify-center ${mobileOrder === 1 ? 'show-1' : mobileOrder === 2 ? 'show-2' : 'show-3'} ${
        order === 1 ? 'sm:show-1' : order === 2 ? 'sm:show-2' : 'sm:show-3'
    }`}
>
    <slot />
</div>
