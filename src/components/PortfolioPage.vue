<script setup>

</script>
<template>
  <div class="container mx-auto md:px-10 py-14">
    <div class="container mx-auto">
      <div class="flex flex-col gap-3 items-center" data-aos="fade-right" data-aos-duration="3000">
        <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
        <h1 class="text-3xl font-semibold dark:text-gray-200">Works & Projects</h1>
        <!-- <p class="w-5/6 text-center dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          officiis aspernatur.
        </p> -->
      </div>
    </div>
    <div class="flex flex-wrap p-5 sm:p-0 lg:p-10 md:p-5 justify-between">
      <!-- Card -->
      <div class="w-full md:w-4/12 lg:w-3/12 my-3 rounded-lg md:my-10 p-2 md:m-0 flex flex-col gap-3" v-for="(item, index) in 4" :key="index" 
        data-aos="fade-right" data-aos-duration="3000">
        <img class="shadow-xl rounded-lg mx-2"
          src="https://img.freepik.com/free-vector/abstract-green-round-big-data-visualization_1217-2586.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

