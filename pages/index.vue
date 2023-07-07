<script setup>
import AutoType from '@/components/AutoType.vue';
const typed = [
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer',
    'IT Consultant',
    'Freelancer',
    'Content Creator'
];
</script>
<template>
    <div class="min-h-screen">
        <div class="">
            <div
                class="flex flex-col md:flex-row items-center justify-center md:space-x-11 h-[80vh] md:h-screen px-5 gap-10"
            >
                <!-- first col flex -->
                <div class="grid space-y-6 md:space-y-6">
                    <div
                        class="grid space-y-8 md:space-y-4 animate__animated animate__slideInLeft animate__slow"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                    >
                        <div class="dark:text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                            Hello, It's Me
                        </div>
                        <div class="md:uppercase text-5xl lg:text-6xl font-bold dark:text-white">
                            Emmanuel Nkem
                        </div>
                        <div
                            class="dark:text-white text-xl md:text-2xl lg:text-3xl font-semibold flex gap-2 items-center"
                        >
                            And I'm a
                            <span class="text-primary">
                                <AutoType :text="typed" />
                            </span>
                        </div>
                        <div class="my-4 dark:text-gray-200 text-md md:text-lg max-w-md">
                            <span class="text-primary font-bold">iDesign</span>,
                            <span class="text-primary font-bold">iBuild</span>,
                            <span class="text-primary font-bold">iDevelop</span>,
                            <span class="text-primary font-bold">iMaintain</span>,
                            <span class="text-primary font-bold">iCode</span> and most importantly I
                            have a passion for creating high-quality software solutions that meet
                            the needs of
                            <strong class="text-primary font-bold">businesses</strong> and
                            <strong class="text-primary font-bold">end-users</strong>.
                        </div>
                    </div>
                    <div
                        class="flex justify-center md:justify-start gap-3 px-8 py-3"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <a href="http://m.facebook.com/profile.php?id=100013693423003">
                            <div
                                class="shadow-2xl shadow-primary border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-primary text-xl"
                            >
                                <i class="bx bxl-facebook"></i>
                            </div>
                        </a>
                        <a href="https://twitter.com/c0deNugget">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-primary text-xl"
                            >
                                <i class="bx bxl-twitter"></i>
                            </div>
                        </a>
                        <a href="https://wa.me/2348014587962">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-primary text-xl"
                            >
                                <i class="bx bxl-whatsapp"></i>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/emma-ndubuisi-363393131/">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-primary text-xl"
                            >
                                <i class="bx bxl-linkedin"></i>
                            </div>
                        </a>
                        <a href="https://github.com/NK-Drakula">
                            <div
                                class="border-2 border-primary h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-primary text-xl"
                            >
                                <i class="bx bxl-github"></i>
                            </div>
                        </a>
                    </div>
                    <div class="my-7 flex gap-5 items-center justify-center md:justify-start">
                        <a
                            href="/EMMANUELNKEMNDUBUISI-CV.pdf"
                            class="px-4 py-2 font-sans font-semibold w-fit bg-primary rounded-xl text-white h-fit gap-1 flex items-center shadow hover:shadow-inner shadow-primary animate__animated animate__pulse animate__slower animate__infinite animate__delay-5s hvr-icon-hang"
                            target="_blank"
                            download="EMMANUELNKEMNDUBUISI-CV.pdf"
                        >
                            Download CV
                            <i class="bx bxs-cloud-download text-3xl hvr-icon"></i>
                        </a>
                        <a
                            href="tel:+2348076497448"
                            class="px-4 py-2 font-sans font-semibold w-fit bg-primary rounded-xl text-white h-fit gap-1 flex items-center shadow hover:shadow-inner shadow-primary animate__animated animate__pulse animate__slower animate__infinite animate__delay-5s hvr-icon-buzz-out"
                        >
                            Call Us
                            <i class="bx bx-phone text-3xl hvr-icon"></i>
                        </a>
                    </div>
                </div>
                <!-- Second Col flex -->
                <div class="polygon p-2 ">
                    <!-- animated Image  -->
                    <img
                        src="~/assets/images/me.jpg"
                        alt=""
                        class="shadow-lg rounded h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 animate__animated animate__pulse animate__slower animate__infinite animate__delay-1s"
                    />
                </div>
            </div>
        </div>
        <div class="">
            <SectionAbout />
            <sectionStack />
            <SectionService />
            <SectionWork />
        </div>
    </div>
</template>
<style lang="css" scoped>
.polygon {
    aspect-ratio: 1;
    clip-path: polygon(
        100% 50%,
        85.36% 85.36%,
        50% 100%,
        14.64% 85.36%,
        0% 50%,
        14.64% 14.64%,
        50% 0%,
        85.36% 14.64%
    );
}
</style>
