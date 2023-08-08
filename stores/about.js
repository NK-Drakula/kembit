import { defineStore } from 'pinia';
import axios from '~/plugins/axios';
const $axios = axios().provide.axios;

export const useAboutStore = defineStore('about', {
    state: () => ({
        isEmpty: true,
        description: ''
    }),
    actions: {
        async getAbout() {
            let res = await $axios.get('about');

            this.$state.description = res.data.data.description;
            this.$state.isEmpty = false;
        }
    },
    persist: true
});
