<script setup>
const route = useRoute();
const id = ref(route.params.id);

const { $serviceStore } = useNuxtApp();

onMounted(async () => {
    await $serviceStore.getService(id.value);
});
</script>

<template>
    <div class="min-h-screen mt-10 mb-25">
        <div v-if="!$serviceStore.service.id || $serviceStore.service.id != id" class="text-3xl h-[80vh] flex items-center justify-center">
            <Loader />
        </div>
        <div v-else class="md:py-20 md:-mt-20 px-5">
            <div class="">
                <div
                    class="lg:mx-20 bg-white/60 dark:bg-white/10 p-5 md:p-10 rounded-xl dark:text-white"
                >
                    <h1 class="py-5 md:py-10 font-bold text-2xl lg:text-4xl text-center">
                        {{ $serviceStore.service.title }}
                    </h1>
                    <div v-html="$serviceStore.service.description" class="text-justify space-y-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
