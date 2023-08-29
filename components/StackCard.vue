<script setup>
const props = defineProps({
    stack: Object,
});

const stack = props.stack;
</script>

<template>
    <div
        class="col-span-6 md:col-span-4 lg:col-span-3 rounded-lg flex flex-col justify-center items-center"
        data-aos="fade-left"
        :data-aos-duration="3000"
    >
        <div
            class="bg-gray-300/50 dark:bg-zinc-800 rounded-lg flex items-center justify-center hvr-glow shadow-md w-full h-[200px] space-y-5"
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
