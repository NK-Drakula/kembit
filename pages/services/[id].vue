<script setup>
const route = useRoute();
const id = route.params.id;

const baseUrl = useRuntimeConfig().public.baseURL;

const {
    data: service,
    pending,
    error,
    refresh
} = useLazyFetch('/service/' + id, {
    baseURL: baseUrl
});
</script>

<template>
    <div class="min-h-screen mt-10 mb-25">
        <div v-if="pending" class="text-3xl h-[80vh] flex items-center justify-center">
            <Loader />
        </div>
        <div v-else class="md:py-20 md:-mt-20 px-5">
            <div class="">
                <div
                    class="lg:mx-20 bg-white/60 dark:bg-white/10 p-5 md:p-10 rounded-xl dark:text-white"
                >
                    <h1 class="py-5 md:py-10 font-bold text-2xl lg:text-4xl text-center">
                        {{ service.data.title }}
                    </h1>
                    <div v-html="service.data.description" class="text-justify space-y-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
