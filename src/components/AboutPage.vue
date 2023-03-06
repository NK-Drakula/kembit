<script setup>
import stacks from "@/stores/stack.json"
</script>
<template>
    <div class="px-10">
        <div class="mx-auto flex lg:flex-row items-center flex-col-reverse py-20 gap-20">
            <div class="relative text-center space-y-5">
                <div class="rounded-full w-fit md:w-64 h-fit md:h-64 overflow-hidden border dark:border-gray-100 border-gray-500 animate__animated animate__pulse animate__slower animate__infinite"
                    data-aos="zoom-in">
                    <img src="@/assets/me.jpg" class="" />
                </div>
                <div class="font-bold text-2xl dark:text-gray-200 text-gray-600">EmmaNkem</div>
            </div>
            <div class="flex flex-col my-auto gap-3 w-full">
                <h1 data-aos="fade-left" data-aos-duration="3000" class="text-primary font-bold">ABOUT ME</h1>
                <h1 data-aos="fade-left" data-aos-duration="3000" class="dark:text-gray-200 text-3xl font-medium">Better
                    Design</h1>
                <h1 data-aos="fade-left" data-aos-duration="3000" class="dark:text-gray-200 text-3xl font-medium">Better
                    Experience</h1>
                <p class="text-gray-500 dark:text-gray-400">
                    With over 5 years of experience in web development, I have honed my
                    skills in creating and maintaining high-quality websites and web
                    applications. Throughout my career, I have worked with a variety of
                    programming languages, frameworks, and tools, allowing me to become
                    proficient in the latest technologies and techniques.
                </p>
                <div class="flex flex-wrap justify-center">
                    <!-- Start Flex -->
                    <!-- Html -->
                    <div class="w-6/12 md:w-4/12 lg:w-3/12 rounded-lg flex flex-col justify-center my-3 px-2 sm:px-3 md:px-4 lg:px-5"
                        v-for="stack in stacks" :key="stack.id">
                        <div class="bg-gray-300/50 dark:bg-neutral-800 p-4 lg:mx-45 rounded-lg flex items-center justify-center hvr-glow shadow-md"
                            data-aos="zoom-in-left" data-aos-duration="2000">
                            <div class="text-center">
                                <img :src="stack.image" :alt="stack.name + ' Logo'" :title="`${stack.name} Logo`"
                                    class="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" />
                                <h2 class="text-gray-500 dark:text-gray-300 font-semibold">{{ stack.name }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>