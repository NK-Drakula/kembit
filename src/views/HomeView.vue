<script setup>
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ServicePage from '@/components/ServicePage.vue';
import PortfolioPage from '@/components/PortfolioPage.vue';
</script>

<template>
  <!-- Home -->

  <MainLayout>
    <TransitionRoot>
      <div class="">
        <div class="">
          <HomePage />
        </div>
      </div>
      
      <div class="border-b w-11/12 mx-auto dark:border-b-neutral-800 border-b-gray-400" data-aos="fade-in" />

      <!-- About -->
      <section id="about">
        <div class="lg:px-5">
          <AboutPage />
        </div>
      </section>
      
      <div class="border-b w-11/12 mx-auto dark:border-b-neutral-800 border-b-gray-400" data-aos="fade-in" />

      <!-- Services -->
      <section id="services">
        <div class="lg:px-5 py-3">
          <ServicePage />
        </div>
      </section>
      
      <div class="border-b w-11/12 mx-auto dark:border-b-neutral-800 border-b-gray-400" data-aos="fade-in" />

      <!-- Portfolio -->
      <section id="portfolio">
        <div class="py-3">
          <PortfolioPage />
        </div>
      </section>
    </TransitionRoot>
  </MainLayout>
</template>
