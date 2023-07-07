<script setup>
const baseUrl = useRuntimeConfig().public.baseURL;
const { data: projects, pending, error } = useLazyFetch('/projects', { baseURL: baseUrl });
</script>

<template>
    <div class="min-h-screen py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 px-5 md:px-0">
        <div
            v-if="pending"
            class="flex justify-center items-center min-h-screen"
        >
            <Loader />
        </div>
        <div v-else class="max-w-screen-lg mx-auto">
            <h1
                class="text-2xl mb-12 md:text-3xl font-bold text-center text-primary uppercase py-4"
            >
                Projects / Works
            </h1>

            <div
                class=""
            >
                <div
                    class="grid grid-cols-12 gap-6 md:gap-16 items-center justify-center"
                >
                    <div v-for="project in projects.data" class="col-span-12 md:col-span-6">
                        <WorkCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
