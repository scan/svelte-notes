<script lang="ts">
    //// Fonts
    import '@fontsource/roboto/latin-ext-400.css';
    import '@fontsource/roboto/latin-ext-700.css';
    import '@fontsource/roboto-slab/latin-ext-400.css';
    import '@fontsource/roboto-slab/latin-ext-700.css';
    import '@fontsource/roboto-mono/latin-ext-400.css';
    import '@fontsource/roboto-mono/latin-ext-700.css';

    import Header from '$lib/components/header.svelte';
</script>

<Header />

<slot />

<style global="" lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(body, html) {
        @apply min-h-screen;
        @apply flex flex-col justify-between;
    }
</style>
