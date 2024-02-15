<script lang="ts">
    import Icon from '@iconify/svelte';
    import Button from './button.svelte';

    export let images: string[];
    let idx = 0;
    let fullscreen = false;
    let direction = '';

    const slide = (isNext: boolean) => {
        direction = isNext ? 'animate-slideFromLeft' : 'animate-slideFromRight';
        let next = isNext ? idx + 1 : idx - 1;
        if (next >= images.length) next = 0;
        if (next < 0) next = images.length - 1;
        idx = next;
    };
</script>

<div class="neu-in relative flex w-full justify-center overflow-hidden rounded-xl px-4 py-2">
    <div class="flex w-full justify-center">
        {#each images as path, i (i)}
            <div
                class={`${i !== idx ? 'hidden' : direction} flex aspect-video h-full w-full items-center justify-center`}
            >
                <img class="max-h-full rounded-xl" src={path} alt="" />
            </div>
        {/each}
    </div>
    <div class="absolute bottom-4 flex gap-3 opacity-60 sm:bottom-6 sm:gap-4">
        {#each images as _, i (i)}
            <button
                on:click={() => (idx = i)}
                class={`${i === idx ? 'bg-color0' : 'bg-gray-400 hover:cursor-pointer'} h-1 w-[20px] rounded-lg hover:scale-125 sm:w-[50px]`}
            ></button>
        {/each}
    </div>
    <div class="absolute top-3/4 flex w-full -translate-y-1/2 justify-between px-2 sm:top-1/2 sm:px-6">
        <Button
            onClick={() => slide(false)}
            class="rounded-l-3xl rounded-r-md bg-gray-400 px-1 opacity-30 hover:text-color0 hover:opacity-60 sm:px-2 sm:py-6 sm:text-4xl sm:opacity-20"
        >
            <Icon icon="ci:chevron-left" />
        </Button>
        <Button
            onClick={() => slide(true)}
            class="rounded-l-md rounded-r-2xl bg-gray-400 px-1 py-4 opacity-30 hover:text-color0 hover:opacity-60 sm:px-2 sm:py-6 sm:text-4xl sm:opacity-20"
        >
            <Icon icon="ci:chevron-right" />
        </Button>
    </div>
    <div class="absolute right-3 top-2 z-20 hidden text-lg text-color0">
        <Button onClick={() => (fullscreen = true)} class="opacity-60 hover:opacity-100">
            <Icon icon="fa:search" />
        </Button>
    </div>
    {#if fullscreen}
        <div class="fixed top-0 z-20 flex h-screen w-full items-center">
            <div class="relative z-50 flex max-h-[80vh] min-h-[55vh] w-full items-center justify-center opacity-100">
                <button
                    on:click={() => (fullscreen = false)}
                    class="absolute right-4 top-2 flex items-center py-0 text-2xl opacity-60 lg:right-40 lg:top-6"
                >
                    &#10006;
                </button>
                <img class="lg::max-w-[60vw] max-h-[75vh] opacity-100 sm:max-w-[90vw]" src={images[idx]} alt="" />
            </div>
            <div class="fixed z-auto h-screen w-full bg-gray-500 opacity-80"></div>
        </div>
    {/if}
</div>
