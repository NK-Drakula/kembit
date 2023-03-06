<script setup>
import Logo from '@/components/header/logo.vue'
import NavBar from '@/components/header/Nav.vue'

</script>
<template>
  <div>
    
    <nav
      class="px-2 sm:px-4 py-2.5 bg-gradient-to-r from-indigo-800 to-primary fixed w-screen dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-800 z-20 -top-1 left-0 right-0 shadow shadow-zinc-800 "
    >
      <div class="container">
        <div class="flex flex-wrap items-center justify-between mx-auto">
          <Logo />
          <NavBar />
        </div>
      </div>
    </nav>
    <slot  />
  </div>
</template>
