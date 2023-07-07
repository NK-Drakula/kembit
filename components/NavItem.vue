<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    path: String,
    name: String,
    getType: {
        type: String,
        default: 'route'
    }
});
const route = useRoute();
</script>

<template>
    <li v-if="props.getType == 'route'" class="block mb-6 md:mb-0">
        <NuxtLink
            :to="props.path"
            @click="isOpen"
            class="pb-3 pt-3 md:pt-0 dark:hover:md:text-primary"
            :class="
                $route.fullPath == props.path
                    ? 'text-white dark:text-primary font-bold'
                    : 'text-gray-300 peer'
            "
        >
            {{ $props.name }}</NuxtLink
        >
        <div
            :class="
                $route.fullPath == props.path
                    ? 'border-b-2 border-white dark:border-primary translate-y-3'
                    : ''
            "
            class="dark:peer-hover:border-b-2 dark:peer-hover:border-primary dark:peer-hover:transition dark:peer-hover:duration-700 dark:peer-hover:delay-100 dark:peer-hover:translate-y-3 peer-hover:border-b-2 peer-hover:border-white peer-hover:transition peer-hover:duration-700 peer-hover:delay-100 peer-hover:translate-y-3"
        ></div>
    </li>
    <li v-else class="block mb-6 md:mb-0">
        <NuxtLink
            :to="'/' + props.path"
            @click="isOpen"
            class="pb-3 pt-3 md:pt-0 dark:hover:md:text-primary"
            :class="
                $route.hash == props.path
                    ? 'text-white dark:text-primary font-bold'
                    : 'text-gray-300 peer'
            "
        >
            {{ props.name }}</NuxtLink
        >
        <div
            :class="
                $route.hash == props.path
                    ? 'border-b-2 border-white dark:border-primary translate-y-3'
                    : ''
            "
            class="dark:peer-hover:border-b-2 dark:peer-hover:border-primary dark:peer-hover:transition dark:peer-hover:duration-700 dark:peer-hover:delay-100 dark:peer-hover:translate-y-3 peer-hover:border-b-2 peer-hover:border-white peer-hover:transition peer-hover:duration-700 peer-hover:delay-100 peer-hover:translate-y-3"
        ></div>
    </li>
</template>
