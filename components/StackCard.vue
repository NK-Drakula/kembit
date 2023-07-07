<script setup>
const props = defineProps({
    stack: Object
});

const stack = props.stack;
</script>

<template>
    <div
        class="col-span-4 md:col-span-3 lg:col-span-2 rounded-lg flex flex-col justify-center items-center my-3 px-2 sm:px-3 md:px-4 lg:px-5"
        data-aos="fade-left"
        data-aos-duration="3000"
    >
        <div
            class="bg-gray-300/50 dark:bg-zinc-800 p-4 lg:mx-45 rounded-lg flex items-center justify-center hvr-glow shadow-md"
        >
            <div class="text-center">
                <img
                    :src="stack.image"
                    :alt="stack.title + ' Logo'"
                    :title="`${stack.title} Logo`"
                    class="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg rounded-md mx-auto"
                />
                <h2 class="text-gray-500 dark:text-gray-300 font-semibold">
                    {{ stack.title }}
                </h2>
            </div>
        </div>
    </div>
</template>
