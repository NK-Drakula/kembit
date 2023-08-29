<script setup>
const { $projectStore } = useNuxtApp();

onMounted(async () => {
    await $projectStore.getProjects();
});
</script>

<template>
    <div class="py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 md:-mt-20 px-5 md:px-0">
        <div v-if="$projectStore.isEmpty" class=""></div>
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
                            v-if="$projectStore.projects.length > 2"
                            class="grid grid-cols-2 gap-10 lg:gap-20 items-center justify-center"
                        >
                            <div
                                v-for="project in $projectStore.projects.slice(0, 2)"
                                class="col-span-2 lg:col-span-1"
                            >
                                <WorkCard :project="project" />
                            </div>
                        </div>
                        <div
                            v-else
                            class="grid grid-cols-2 gap-10 lg:gap-20 items-center justify-center"
                        >
                            <div
                                v-for="project in $projectStore.projects"
                                class="col-span-2 lg:col-span-1"
                            >
                                <WorkCard :project="project" />
                            </div>

                            <NuxtLink
                                to="/projects"
                                v-if="$projectStore.projects.length > 2"
                                class="col-span-full my-3 flex justify-end"
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
