import { defineStore } from 'pinia';
import axios from '~/plugins/axios';

const $axios = axios().provide.axios;

export const useStackStore = defineStore('stack', {
    state: () => ({
        isEmpty: true,
        stacks: {}
    }),
    actions: {
        async getStacks() {
            let response = await $axios.get('stacks');
            this.$state.isEmpty = false;
            this.$state.stacks = response.data.data;
        }
    },
    persist: true
});
