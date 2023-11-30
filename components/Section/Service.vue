<script setup>
const { $serviceStore } = useNuxtApp();

onMounted(async () => {
    await $serviceStore.getServices();
});
</script>

<template>
    <div
        class="py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 md:-mt-20 px-5 md:px-0 overflow-hidden"
        id="services"
    >
        <div v-if="$serviceStore.isEmpty" class="">
            <!-- <Loader /> -->
        </div>
        <div v-else class="w-full lg:max-w-max mx-auto">
            <div>
                <h1
                    class="text-2xl mb-12 md:text-3xl font-bold text-center text-primary uppercase py-4"
                >
                    Services Offered
                </h1>

                <div class="lg:mx-14">
                    <div class="grid grid-cols-3 gap-6 justify-center items-center">
                        <div
                            v-for="(service, index) in $serviceStore.$state.services"
                            :key="index"
                            class="col-span-3 sm:col-span-3 md:col-span-1 px-5 md:px-0"
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
