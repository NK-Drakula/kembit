<script setup>
import LogoHead from '@/components/header/LogoHead.vue'
import NavBar from '@/components/header/NavBar.vue'

</script>
<template>
  <div>

    <nav
      class="px-2 sm:px-5 py-2.5 bg-gradient-to-r from-indigo-800 to-primary fixed w-screen dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-800 z-20 top-0 left-0 right-0 shadow shadow-zinc-800 ">
      <div class="">
        <div class="flex flex-wrap items-center justify-between">
          <LogoHead />
          <NavBar />
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
