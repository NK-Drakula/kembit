<script setup>
const baseUrl = useRuntimeConfig().public.baseURL;
const { data: projects, pending, error } = useLazyFetch('/projects', { baseURL: baseUrl });
</script>

<template>
    <div class="py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 md:-mt-20 px-5 md:px-0">
        <div v-if="pending" class=""></div>
        <div v-else>
            <div class="max-w-screen-lg mx-auto">
                <h1
                    class="text-2xl mb-12 md:text-3xl font-bold text-center text-primary uppercase py-4"
                >
                    Projects / Works
                </h1>

                <div class="">
                    <div>
                        <div
                            v-if="projects.data.length > 2"
                            class="grid grid-cols-12 gap-6 items-center justify-center"
                        >
                            <div
                                v-for="project in projects.data.slice(0, 2)"
                                class="col-span-12 md:col-span-6"
                            >
                                <WorkCard :project="project" />
                            </div>
                        </div>
                        <div
                            v-else
                            class="grid grid-cols-12 space-y-11 md:space-y-0 space-x-0 md:space-x-14 items-center justify-center"
                        >
                            <div v-for="project in projects.data" class="col-span-12 md:col-span-6">
                                <WorkCard :project="project" />
                            </div>

                            <NuxtLink to="/projects"
                                v-if="projects.data.length > 2"
                                class="col-span-12 my-3 flex justify-end"
                            >
                                <ButtonNext> View All </ButtonNext>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
