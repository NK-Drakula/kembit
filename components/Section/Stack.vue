<script setup>
const baseUrl = useRuntimeConfig().public.baseURL;
const {
    data: stacks,
    pending: stacksPending,
    error: stacksError
} = useLazyFetch('/stacks', { baseURL: baseUrl });
</script>

<template>
    <!-- Stacks -->
    <div
        class="flex flex-col justify-center items-center bg-gradient-to-t to-gray-200 from-gray-200 dark:from-zinc-900 dark:to-[#19191C] md:pb-20 md:pt-5 pt-3"
    >
        <div v-if="stacksPending">
            <!-- <Loader /> -->
        </div>
        <div v-else class="max-w-screen-lg mx-auto">
            <h1
                class="text-center text-2xl mb-12 md:text-3xl font-bold text-primary uppercase py-4"
            >
                Stacks
            </h1>
            <div class="grid grid-cols-12 justify-center items-center">
                <StackCard v-for="stack in stacks.data" :key="stack.id" :stack="stack" />
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped></style>
