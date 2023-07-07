<script setup>
import { Bars4Icon, MoonIcon, SunIcon, XCircleIcon, PhoneIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { useDark } from '@vueuse/core';

const route = useRoute();
const router = useRouter();

const isDark = useDark();
const isOpen = ref(false);
</script>
<template>
    <div class="">
        <div class="flex flex-wrap items-center justify-between w-full">
            <div class="md:w-1/3">
                <div class="animate__animated animate__slideInLeft animate__fast">
                    <NuxtLink
                        v-if="route.name == 'index'"
                        to="/"
                        class="flex items-center space-x-2"
                    >
                        <img
                            src="~/assets/images/favorite1.png"
                            class="w-7 h-7 drop-shadow-2xl shadow-primary"
                            alt=""
                        />
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap text-white hvr-float-shadow"
                            >KEMBIT</span
                        >
                    </NuxtLink>
                    <button v-else @click="router.back" type="button" role="button" class="w-fit flex items-center space-x-2  bg-zinc-800 dark:bg-primary text-white rounded-lg px-3 py-2 font-bold">
                        <i class="bx bx-left-arrow bx-sm hvr-icon-back"></i>
                        <span>Back</span>
                    </button>
                </div>
            </div>
            <ul
                :class="isOpen ? '' : 'hidden md:flex'"
                class="flex-col mt-4 rounded-lg md:flex-row md:space-x-8 animate__animated animate__backInDown animate__faster order-last md:order-none w-full md:w-1/3 md:justify-center"
            >
                <!-- TODO: Home -->
                <NavItem :is-open="false" path="/" name="Home" />
                <!-- TODO: About -->
                <NavItem :is-open="false" path="#about" name="About" get-type="hash" />

                <!-- TODO: Service -->
                <NavItem :is-open="false" path="#services" name="Services" get-type="hash" />

                <!-- TODO: protfolio -->
                <NavItem :is-open="false" path="/projects" name="Portfolio" />
            </ul>
            <div class="animate__animated animate__slideInRight md:w-1/3">
                <div class="flex items-center justify-end space-x-3 px-4 md:px-0">
                    <div @click="isDark = !isDark" class="text-white dark:text-primary">
                        <MoonIcon
                            class="w-6 h-6 p-1 dark:bg-zinc-700 hvr-grow-shadow rounded-full shadow-xl"
                            v-if="isDark"
                        />
                        <SunIcon
                            class="w-6 h-6 p-1 bg-zinc-700 hvr-grow-shadow rounded-full shadow-xl"
                            v-else
                        />
                    </div>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        class="inline-flex items-center text-white dark:text-primary md:hidden"
                        @click="isOpen = !isOpen"
                    >
                        <span class="sr-only">Open main menu</span>
                        <XCircleIcon class="w-7 h-7" v-if="isOpen" />
                        <Bars4Icon class="w-7 h-7" v-else />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
