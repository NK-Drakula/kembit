import { useStackStore } from "~/stores/stack";
import { useAboutStore } from "~/stores/about";
import { useServiceStore } from "~/stores/service";
import { useProjectStore } from "~/stores/project";


export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            aboutStore: useAboutStore(),
            stackStore: useStackStore(),
            serviceStore: useServiceStore(),
            projectStore: useProjectStore(),
        }
    }
});