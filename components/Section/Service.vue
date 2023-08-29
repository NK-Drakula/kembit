<script setup>
const { $serviceStore } = useNuxtApp();

onMounted(async () => {
    await $serviceStore.getServices();
});
</script>

<template>
    <div class="py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 md:-mt-20 px-5 md:px-5" id="services">
        <div v-if="$serviceStore.isEmpty" class="">
            <!-- <Loader /> -->
        </div>
        <div v-else class="max-w-screen-lg mx-auto">
            <div>
                <h1
                    class="text-2xl mb-12 md:text-3xl font-bold text-center text-primary uppercase py-4"
                >
                    Services Offered
                </h1>

                <div class="">
                    <div class="grid grid-cols-12 justify-center items-center gap-6">
                        <div
                            v-for="(service, index) in $serviceStore.$state.services" :key="index"
                            class="col-span-12 lg:col-span-4"
                            data-aos="zoom-in-left"
                            :data-aos-duration="index * 1500"
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
