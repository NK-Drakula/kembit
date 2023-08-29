<script setup>
const { $serviceStore } = useNuxtApp();

onMounted(async () => {
    await $serviceStore.getServices();
});
</script>

<template>
    <div class="py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 md:-mt-20 px-5 md:px-0 overflow-hidden" id="services">
        <div v-if="$serviceStore.isEmpty" class="">
            <!-- <Loader /> -->
        </div>
        <div v-else class="w-full lg:max-w-screen-md mx-auto">
            <div>
                <h1
                    class="text-2xl mb-12 md:text-3xl font-bold text-center text-primary uppercase py-4"
                >
                    Services Offered
                </h1>

                <div class="">
                    <div class="grid grid-cols-4 justify-center items-center gap-6">
                        <div
                            v-for="(service, index) in $serviceStore.$state.services" :key="index"
                            class="col-span-4 lg:col-span-1"
                        >
                            <ServiceCard :service="service" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
