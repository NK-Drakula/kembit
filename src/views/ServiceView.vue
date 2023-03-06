<script setup>
import {useRoute} from 'vue-router';
import Items from '@/stores/services.json'

const route = useRoute();

var item = Items.services.find(service => service.id === parseInt(route.params.id));

const goBack = () => {
  window.history.back();
}


</script>

<template>
  <!-- Home -->

  <MainLayout>
    <div class="mt-14 p-5 max-w-4xl mx-auto">
      <div class="mt-5">
        <button @click="goBack()" class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center gap-1 hvr-icon-back">
          <i class='bx bxs-left-arrow hvr-icon'></i>
          Back
        </button>
      </div>
      <div class="py-9 dark:bg-neutral-800 rounded-lg my-5 px-5 text-gray-200">
        <h1 class="text-4xl font-semibold">
          {{ item.title ?? '' }}
        </h1>

        <div v-html="item.desc" class="p-5 pt-6"></div>

      </div>
    </div>
  </MainLayout>
</template>
