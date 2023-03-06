<script setup>
</script>

<template>
  <!-- Home -->

  <MainLayout>
    <div class="mt-14 p-5">
      <div class="flex items-center justify-evenly">
        <div>
          <div>
            <img src="../assets/undraw_page_not_found_re_e9o6.svg" class="drop-shadow-2xl w-[500px] h-[500px] animate__animated animate__pulse animate__slower animate__infinite animate__delay-5s" alt="404 page">
          </div>
        </div>
        <div >
          <div class="text-4xl font-semibold p-5 dark:text-white text-primary">
            Are you lost?
          </div>
          <div class="text-center">
            <RouterLink :to="{name:'home'}" class="bg-primary block px-4 py-2 rounded-lg text-white text-lg font-medium hover:bg-blue-700">
              Go Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>    
  </MainLayout>
</template>
