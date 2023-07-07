<script setup></script>
<template>
    <div class="relative">
        <nav
            class="sticky top-0 left-0 right-0 px-2 sm:px-5 py-2.5 bg-gradient-to-r from-indigo-800 to-primary dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-800 z-20 shadow shadow-zinc-800"
        >
            <div class="">
                <NavBar />
            </div>
        </nav>
        <main class="min-h-screen">
            <slot />
        </main>
    </div>
</template>
