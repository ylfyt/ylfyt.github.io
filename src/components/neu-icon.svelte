<script lang="ts">
    let className: string = '';
    export { className as class };
</script>

<div class={`neu-out flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg text-color0 ${className}`}>
    <slot />
</div>
