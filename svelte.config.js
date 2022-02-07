import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [preprocess()],

    ssr: true,

    kit: {
        adapter: adapter({
            precompress: true,
        }),

        vite: {
            optimizeDeps: {
                exclude: [],
            },
            plugins: [],
        },
    },
};

export default config;
