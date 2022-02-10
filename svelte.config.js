import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [preprocess()],

    kit: {
        csp: {
            mode: 'hash',
            directives: {
                'connect-src': ["'self'", 'ws://localhost:3000'],
            },
        },

        amp: false,
        floc: false,
        prerender: {
            enabled: false,
        },

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
