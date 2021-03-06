import statix from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: statix(),
        target: 'body'
    }
};

export default config;