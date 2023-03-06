<script setup>
import { TransitionRoot } from '@headlessui/vue'
</script>
<template>
 <TransitionRoot 
  appear
  :show="true"
  enter="transition ease-in-out duration-700 transform"
  enterFrom="-translate-x-full"
  enterTo="translate-x-0"
  class="mt-14 container"
 >
  <slot />
 </TransitionRoot>
</template>



