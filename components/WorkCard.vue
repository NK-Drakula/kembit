<script setup>
const props = defineProps({
    project: Object
});

const project = props.project;
var stacks =
    props.project.stacks.length > 5 ? props.project.stacks.slice(0, 5) : props.project.stacks;
const link = '/projects/' + project.id;
</script>

<template>
    <NuxtLink
        :to="link"
        class="card md:w-[510px] md:h-[260px] bg-gray-300 dark:bg-zinc-800 relative rounded-xl flex items-center justify-center overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
    >
        <img
            class="img object-cover h-full w-full"
            :src="project.cover_image"
            :alt="project.title + 'Images'"
        />
        <div class="card__content bg-gray-300 dark:bg-zinc-800">
            <NuxtLink
                :to="link"
                class="m-0 text-xl font-bold text-gray-900 dark:text-gray-300 py-2"
            >
                {{ project.title }}</NuxtLink
            >
            <p v-html="project.description.substring(0, 150) + '...'" class="card__description"></p>
            <div class="my-4 hidden md:block">
                <NuxtLink
                    :to="link"
                    class="m-0 text-lg font-bold text-gray-900 dark:text-gray-300 py-2"
                    >Stacks</NuxtLink
                >
                <div class="flex items-center -space-x-3">
                    <img
                        v-for="stack in stacks"
                        :key="stack"
                        :src="stack.image"
                        :alt="stack.title"
                        class="w-10 h-10 rounded-full border-2 p-2 bg-gray-200 dark:bg-gray-900 border-zinc-900 dark:border-gray-200 hover:z-30"
                    />
                    <div
                        class="w-10 h-10 grid place-content-center rounded-full border-2 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white border-zinc-900 dark:border-gray-200"
                    >
                        {{ project.stacks.length - 5 }}+
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="css" scoped>
.card {
    /* background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%); */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

@media (min-width: 768px) {
    .card:hover {
        transform: rotate(-5deg) scale(1.1);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    .card:hover .card__content {
        transform: translate(-50%, -50%) rotate(0deg);
        opacity: 1;
    }
}
.card .img {
    width: 100%;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
}

.card:hover .img {
    scale: 0;
    transform: rotate(-45deg);
}
</style>
