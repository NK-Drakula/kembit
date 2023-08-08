<script setup>
const route = useRoute();
const id = ref(route.params.id);

const { $projectStore } = useNuxtApp();

onMounted(async () => {
    await $projectStore.getProject(id.value);
});
</script>

<template>
    <div class="min-h-screen mt-10 mb-25">
        <div
            v-if="!$projectStore.project.id  || $projectStore.project.id != id"
            class="text-3xl h-[80vh] flex items-center justify-center"
        >
            <Loader />
        </div>
        <div v-else class="md:py-20 md:-mt-20 px-5">
            <div class="max-w-screen-lg mx-auto">
                <div
                    class="lg:mx-20 bg-white/60 dark:bg-white/10 p-5 md:p-10 rounded-xl dark:text-white"
                >
                    <img
                        :src="$projectStore.project.cover_image"
                        :alt="$projectStore.project.title"
                        class="rounded"
                    />
                    <div class="max-w-3xl mx-auto space-y-8">
                        <h1 class="py-5 md:py-10 font-bold text-2xl lg:text-4xl text-center">
                            {{ $projectStore.project.title }}
                        </h1>
                        <div class="space-y-2">
                            <strong>Stacks Use:</strong><br />

                            <div class="flex items-center -space-x-2">
                                <img
                                    v-for="stack in $projectStore.project.stacks"
                                    :key="stack"
                                    :src="stack.image"
                                    :alt="stack.title"
                                    :title="stack.title"
                                    class="w-10 h-10 rounded-full border-2 p-[6px] bg-gray-200 dark:bg-gray-900 border-zinc-900 dark:border-gray-200 hover:z-30"
                                />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <strong>Project Description:</strong><br />
                            <div
                                v-html="$projectStore.project.description"
                                class="text-justify space-y-3"
                            ></div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <div class="">
                                    <strong>Role:</strong><br />
                                    <div v-html="$projectStore.project.role" class=""></div>
                                </div>
                                <div class="">
                                    <NuxtLink
                                        :to="$projectStore.project.project_link"
                                        target="_blank"
                                        class="relative flex items-center overflow-hidden border-none rounded-xl cssbuttons-io-button bg-primary shadow-primary/75 text-white font-bold"
                                    >
                                        Project Link
                                        <div class="icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.cssbuttons-io-button {
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    border: none;
    letter-spacing: 0.05em;
    height: 2.8em;
    padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}
</style>
