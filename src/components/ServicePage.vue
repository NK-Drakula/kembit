<template>
  <!-- Services -->
  <div class="md:px-10 py-14">
    <div class="container mx-auto">
      <div class="flex flex-col gap-3 items-center">
        <h1 class="text-indigo-600 font-bold">SERVICES</h1>
        <h1 class="text-3xl font-semibold dark:text-gray-100">What Do I offer?</h1>
        <!-- <p class="w-5/6 text-center text-grey-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          officiis aspernatur, obcaecati beatae officia molestias eum odio
          aperiam aut iste tenetur pariatur iusto sint soluta nemo nisi ducimus
          saepe similique.
        </p> -->
      </div>
    </div>
    <div class="flex flex-wrap py-5 p-1 sm:p-3 lg:p-10 md:p-5 justify-center">
      <!-- Card -->
      <div class="w-full md:w-6/12 lg:w-4/12" v-for="item in services.services" :key="item.id"  data-aos="fade-right" data-aos-duration="3000">
        <div class="shadow-2xl h-[230px]  md:h-[240px] lg:h-[220px] relative my-3 rounded-lg p-5 m-2 flex flex-col dark:bg-gradient-to-tr from-neutral-900/60 to-neutral-900/90 via-slate-900/60 dark:shadow-zinc-900 hvr-glow">
          <h1 class="font-medium text-lg dark:text-white">{{ item.title }}</h1>
          <div class="text-gray-500" v-html="item.desc.substring(0, 150)"></div>
          <RouterLink
            :to="'/view/' + item.id + '/' + item.slug.toLowerCase()"
            class="bg-primary w-fit absolute bottom-3 right-2 text-white px-3 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700"
            >Read More</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
 import services from '@/stores/services.json'
</script>
