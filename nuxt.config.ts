// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // devtools: { enabled: true },
    runtimeConfig: {
        public: {
            baseURL: 'https://api.deranisgroups.com/api/v1'
        }
    },
    modules: ['@nuxtjs/tailwindcss',],
    plugins: ['~/plugins/aos.client.ts'],
    css: ['~/assets/css/app.css'],
});
