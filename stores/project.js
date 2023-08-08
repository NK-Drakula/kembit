import { defineStore } from 'pinia';
import axios from '~/plugins/axios';

const $axios = axios().provide.axios;

export const useProjectStore = defineStore('project', {
    state: () => ({
        isEmpty: true,
        projects: {},
        project: {}
    }),
    actions: {
        async getProjects() {
            let res = await $axios.get('projects');

            this.$state.isEmpty = false;
            this.$state.projects = res.data.data;
        },

        async getProject(id) {
            let res = await $axios.get('project/' + id);
            this.$state.project = res.data.data;
        }
    }
});
