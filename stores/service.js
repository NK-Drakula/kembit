import { defineStore } from 'pinia';

import axios from '~/plugins/axios';
const $axios = axios().provide.axios;

export const useServiceStore = defineStore('service', {
    state: () => ({
        isEmpty: true,
        services: {},
        service: {}
    }),
    actions: {
        async getServices() {
            let response = await $axios.get('services');

            this.$state.isEmpty = false;
            this.$state.services = response.data.data;
        },

        async getService(id) {
            let res = await $axios.get('service/' + id);
            this.$state.service = res.data.data;
        }
    },
    persist: true
});
