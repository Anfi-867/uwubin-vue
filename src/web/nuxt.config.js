export default {
    modules: [
        '@nuxtjs/axios',
        [
            'nuxt-highlightjs',
            {
                style: 'atom-one-light',
            },
        ],
    ],
    axios: {
        // proxy: true
    },
};
