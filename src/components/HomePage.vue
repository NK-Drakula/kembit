<script setup>

import AutoType from '@/components/AutoType.vue';
const typed = ['Frontend Developer', 'Backend Developer', 'Mobile Developer', 'IT Consultant', 'Freelancer', 'Content Creator'];
</script>
<template>
    <div class="min-h-[80vh] flex items-center py-10 md:py-5 lg:px-5">
        <div class="container">
            <!-- FLex -->
            <div class="flex flex-col md:items-center md:flex-row md:justify-between gap-14 md:gap-0 lg:px-24">
                <!-- first col flex -->
                <div class="w-full md:w-auto mx-auto px-5 md:px-0">
                    <div class="animate__animated animate__slideInLeft animate__slow" data-aos="fade-left"
                        data-aos-duration="3000">
                        <div class="dark:text-white text-xl md:text-2xl lg:text-3xl font-semibold">Hello, It's Me</div>
                        <div class="md:uppercase text-5xl lg:text-6xl font-bold dark:text-white">Emma Nkem</div>
                        <div class="dark:text-white text-xl md:text-2xl lg:text-3xl font-semibold flex gap-2 items-center">
                            And I'm
                            a
                            <span class="text-primary">
                                <AutoType :text="typed" />
                            </span>
                        </div>
                        <div class="my-4 dark:text-gray-200 text-md md:text-lg max-w-md">
                            <span class="text-primary font-semibold">iDesign</span>, <span
                                class="text-primary font-semibold">iBuild</span>, <span
                                class="text-primary font-semibold">iDevelop</span>, <span
                                class="text-primary font-semibold">iMaintain</span>, <span
                                class="text-primary font-semibold">iCode</span> and most importantly I have a passion for
                            creating high-quality software solutions that meet the needs of <strong
                                class="text-primary">businesses</strong> and <strong
                                class="text-primary">end-users</strong>.
                        </div>
                    </div>
                    <div class="flex gap-3 px-8 py-3" data-aos="fade-right" data-aos-duration="2000">
                        <a href="http://m.facebook.com/profile.php?id=100013693423003">
                            <div
                                class="shadow-2xl shadow-primary border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white  text-primary text-xl ">
                                <i class='bx bxl-facebook'></i>
                            </div>
                        </a>
                        <a href="https://twitter.com/c0deNugget">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white  text-primary text-xl ">
                                <i class='bx bxl-twitter'></i>
                            </div>
                        </a>
                        <a href="https://wa.me/2348014587962">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white  text-primary text-xl">
                                <i class='bx bxl-whatsapp'></i>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/emma-ndubuisi-363393131/">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white  text-primary text-xl">
                                <i class='bx bxl-linkedin'></i>
                            </div>
                        </a>
                        <a href="https://github.com/NK-Drakula">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white  text-primary text-xl">
                                <i class='bx bxl-github'></i>
                            </div>
                        </a>
                    </div>
                    <div class="my-7 flex gap-5 items-center justify-center md:block">


                        <a href="../assets/EmmaNkemCV.pdf"
                            class="px-4 py-2 font-sans font-semibold w-fit bg-primary rounded-xl text-white h-fit gap-1 flex items-center shadow hover:shadow-inner shadow-primary animate__animated animate__pulse animate__slower animate__infinite animate__delay-5s hvr-icon-hang">
                            Download CV
                            <i class='bx bxs-cloud-download text-3xl hvr-icon'></i>
                        </a>


                        <a href="tel:+2348076497448"
                            class="px-4 py-2 font-sans font-semibold w-fit bg-primary rounded-xl text-white h-fit gap-1 flex items-center shadow hover:shadow-inner shadow-primary animate__animated animate__pulse animate__slower animate__infinite animate__delay-5s hvr-icon-buzz-out md:hidden">
                            Call Us
                            <i class='bx bx-phone text-3xl hvr-icon '></i>
                        </a>
                    </div>
                </div>
                <!-- Second Col flex -->
                <div class="px-10 md:px-0">
                    <!-- animated Image  -->
                    <img src="@/assets/home_image.png" alt=""
                        class="rounded w-full  md:h-80 md:w-80 lg:h-96 lg:w-96 animate__animated animate__pulse animate__slower animate__infinite animate__delay-1s">
                </div>
            </div>
        </div>
    </div>
</template>