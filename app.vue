<script setup>
useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,700&display=swap'
        },
        {
            rel: 'stylesheet',
            href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        },
        {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        }
    ]
});

const isLoading = ref(true);

onMounted(() => {
    isLoading.value = false;
});
</script>
<template class="dark">
    <div class="svgBack bg-fixed h-full dark:bg-zinc-900 bg-gray-300">
        <div class="bg-fixed h-full backdrop-blur-md">
            <div
                v-if="isLoading"
                class="grid place-content-center min-h-screen dark:bg-zinc-900 bg-gray-300"
            >
                <Loader />
            </div>
            <div v-else>
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
html,
body {
    margin: 0px !important;
    overflow-x: hidden !important;
}
</style>
