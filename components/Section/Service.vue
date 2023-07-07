<script setup>
const baseUrl = useRuntimeConfig().public.baseURL;
const { data: services, pending, error } = useLazyFetch('/services', { baseURL: baseUrl });
</script>

<template>
    <div class="py-16 md:py-20 bg-gray-200 dark:bg-zinc-900 md:-mt-20 px-5 md:px-0" id="services">
        <div v-if="pending" class="">
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
                            v-for="service in services.data"
                            class="col-span-12 md:col-span-6 lg:col-span-4"
                            data-aos="zoom-in-left"
                            :data-aos-duration="3000"
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
