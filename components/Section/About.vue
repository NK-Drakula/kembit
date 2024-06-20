<script setup>
const { $aboutStore } = useNuxtApp();

onMounted(async () => {
    await $aboutStore.getAbout();
});
</script>
<template>
    <div
        class="md:py-20 bg-gradient-to-t to-transparent dark:via-zinc-900 from-gray-200 dark:from-[#19191C] dark:to-transparent md:-mt-20 px-5 overflow-hidden"
        id="about"
    >
        <div v-if="$aboutStore.$state.isEmpty" class="flex justify-center items-center">
            <Loader />
        </div>
        <div v-else class="w-full lg:max-w-screen-md mx-auto">
            <div>
                <div class="">
                    <div
                        class="mx-auto flex lg:flex-row items-center flex-col-reverse md:px-10 py-20 gap-20"
                    >
                        <div class="flex flex-col my-auto gap-3">
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                class="text-primary text-2xl md:text-3xl uppercase font-bold"
                            >
                                ABOUT ME
                            </h1>
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                class="dark:text-gray-200 text-xl md:text-3xl font-medium"
                            >
                                Better Design
                            </h1>
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="2000"
                                class="dark:text-gray-200 text-xl md:text-3xl font-medium"
                            >
                                Better Experience
                            </h1>
                            <div
                                v-html="$aboutStore.$state.description"
                                class="text-gray-700 dark:text-gray-300 md:text-lg"
                                data-aos="fade-left"
                                data-aos-duration="2500"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
