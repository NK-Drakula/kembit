<script setup>
import NavBar from '@/components/header/NavBar.vue';

</script>
<template>
  <div>

    <nav
      class="px-2 sm:px-5 py-2.5 bg-gradient-to-r from-indigo-800 to-primary fixed w-screen dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-800 z-20 top-0 left-0 right-0 shadow shadow-zinc-800 ">
      <div class="">
        <div class="flex flex-wrap items-center justify-between">

          <div class="animate__animated animate__slideInLeft animate__fast">
            <RouterLink to="/" class="flex items-center space-x-2">
              <img src="@/assets/favorite1.png" class="w-7 h-7 drop-shadow-2xl shadow-primary" alt="">
              <span class="self-center text-xl font-semibold whitespace-nowrap text-white hvr-float-shadow">KEMBIT</span>
            </RouterLink>
          </div>
          <NavBar />
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
