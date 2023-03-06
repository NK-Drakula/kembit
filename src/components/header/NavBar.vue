<script setup>
  import { Bars4Icon, MoonIcon, SunIcon, XCircleIcon, PhoneIcon } from '@heroicons/vue/24/solid'
  import { ref } from 'vue'
  import { useDark } from '@vueuse/core'

  const isDark = useDark();
  const isOpen = ref(false);
</script>
<template>
  <div class="flex space-x-4 md:order-2 items-center animate__animated animate__slideInRight">
    <div @click="isDark = !isDark" class="text-white dark:text-primary">
      <MoonIcon class="w-6 h-6 p-1 dark:bg-slate-700 hvr-grow-shadow  rounded-full shadow-xl" v-if="isDark" />
      <SunIcon class="w-6 h-6 p-1 bg-slate-700 hvr-grow-shadow  rounded-full shadow-xl" v-else />
    </div>
    <button data-collapse-toggle="navbar-sticky" type="button"
      class="inline-flex items-center text-white  dark:text-primary md:hidden" @click="isOpen = !isOpen">
      <span class="sr-only">Open main menu</span>
      <XCircleIcon class="w-7 h-7" v-if="isOpen" />
      <Bars4Icon class="w-7 h-7" v-else />
    </button>
    <a href="tel:+2348076497448"
      class=" hidden px-4 py-2 font-sans font-semibold w-fit bg-primary rounded-lg text-white h-fit gap-1 hvr-icon-buzz-out md:flex items-center  border-2 border-white dark:border-none">
      Call Us
      <PhoneIcon class="hvr-icon w-4 h-4" />
    </a>
  </div>
  <div :class="isOpen ? '' : 'hidden'"
    class="items-center px-4 md:px-0 justify-between w-full md:flex md:w-auto md:order-1">
    <ul
      class="flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 animate__animated animate__backInDown animate__faster">

      <!-- TODO: Home -->
      <li class="block mb-6 md:mb-0">
        <RouterLink :to="{ name: 'home' }" @click="isOpen = false" class="pb-3 pt-3 md:pt-0 dark:hover:md:text-primary"
          :class="$route.fullPath == '/' ? 'text-white dark:text-primary font-bold md:font-semibold ' : 'text-gray-300 peer'">
          Home</RouterLink>
        <div :class="$route.fullPath == '/' ? 'border-b-2 border-white dark:border-primary translate-y-3' : ''"
          class="dark:peer-hover:border-b-2 dark:peer-hover:border-primary  dark:peer-hover:transition dark:peer-hover:duration-700 dark:peer-hover:delay-100 dark:peer-hover:translate-y-3 peer-hover:border-b-2 peer-hover:border-white  peer-hover:transition peer-hover:duration-700 peer-hover:delay-100 peer-hover:translate-y-3">
        </div>
      </li>

      <!-- TODO: About -->
      <li class="block mb-6 md:mb-0">
        <a href="#about" @click="isOpen = false" class="pb-3 pt-3 md:pt-0 dark:hover:md:text-primary"
          :class="$route.hash == '#about' ? 'text-white dark:text-primary font-bold md:font-semibold ' : 'text-gray-300 peer'">
          About</a>
        <div :class="$route.hash == '#about' ? 'border-b-2 border-white dark:border-primary translate-y-3' : ''"
          class="dark:peer-hover:border-b-2 dark:peer-hover:border-primary  dark:peer-hover:transition dark:peer-hover:duration-700 dark:peer-hover:delay-100 dark:peer-hover:translate-y-3 peer-hover:border-b-2 peer-hover:border-white  peer-hover:transition peer-hover:duration-700 peer-hover:delay-100 peer-hover:translate-y-3">
        </div>
      </li>
      <!-- TODO: Service -->
      <li class="block mb-6 md:mb-0">
        <a href="#services" @click="isOpen = false" class="pb-3 pt-3 md:pt-0 dark:hover:md:text-primary"
          :class="$route.hash == '#services' ? 'text-white dark:text-primary font-bold md:font-semibold ' : 'text-gray-300 peer'">
          Service</a>
        <div :class="$route.hash == '#services' ? 'border-b-2 border-white dark:border-primary translate-y-3' : ''"
          class="dark:peer-hover:border-b-2 dark:peer-hover:border-primary  dark:peer-hover:transition dark:peer-hover:duration-700 dark:peer-hover:delay-100 dark:peer-hover:translate-y-3 peer-hover:border-b-2 peer-hover:border-white  peer-hover:transition peer-hover:duration-700 peer-hover:delay-100 peer-hover:translate-y-3">
        </div>
      </li>
      <!-- TODO: protfolio -->
      <li class="block mb-6 md:mb-0">
        <a href="/#portfolio" @click="isOpen = false" class="pb-3 pt-3 md:pt-0 dark:hover:md:text-primary"
          :class="$route.hash == '#portfolio' ? 'text-white dark:text-primary font-bold md:font-semibold ' : 'text-gray-300 peer'">
          Portfolio</a>
        <div :class="$route.hash == '#portfolio' ? 'border-b-2 border-white dark:border-primary translate-y-3' : ''"
          class="dark:peer-hover:border-b-2 dark:peer-hover:border-primary  dark:peer-hover:transition dark:peer-hover:duration-700 dark:peer-hover:delay-100 dark:peer-hover:translate-y-3 peer-hover:border-b-2 peer-hover:border-white  peer-hover:transition peer-hover:duration-700 peer-hover:delay-100 peer-hover:translate-y-3">
        </div>
      </li>
    </ul>
  </div>
</template>

