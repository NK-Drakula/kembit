<script setup>
const props = defineProps({
    service: Object
});

const desc = props.service.description.substring(0, 135) + '...';
const link = '/services/' + props.service.id;
</script>

<template>
    <div
        class="bg-gray-300/50 dark:bg-zinc-800 text-gray-500 dark:text-gray-300 flex items-center justify-center card rounded-2xl text-2xl text-center cursor-pointer p-4 hover:shadow-lg shadow-inner md:max-w-md mx-auto"
        data-aos="fade-right"
        data-aos-duration="3000"
    >
        <div class="h-fit">
            <h1 class="h-fit font-extrabold mb-3">
                {{ props.service.title }}
            </h1>

            <div class="">
                <p v-html="desc" class="text-lg"></p>
            </div>

            <div class="my-3 flex justify-center">
                <NuxtLink :to="link" class="btn d-block"> Read More </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.card {
    box-sizing: border-box;
    backdrop-filter: blur(6px);
    transition: all 0.5s;
    user-select: none;
}

.card:hover {
    transform: scale(1.05);
}

.card:active {
    transform: scale(0.95) rotateZ(1.7deg);
}
.btn {
    --color: #4648ec;
    --color2: #fff;
    padding: 0.4rem 0.88rem;
    background-color: transparent;
    border-radius: 6px;
    border: 3px solid var(--color);
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--color);
}

.btn::after,
.btn::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: var(--color);
}

.btn::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
}

.btn:hover {
    color: var(--color2);
}

.btn:active {
    filter: brightness(0.7);
    transform: scale(0.98);
}
</style>
