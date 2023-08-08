import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://api.deranisgroups.com/api/v1/';

    return {
        provide: {
            axios: axios
        }
    };
});

