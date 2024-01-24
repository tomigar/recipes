<template>
    <div class="flex flex-col min-h-screen justify-start">
        <Header />
        <div class="xl:w-[1024px] mx-auto py-6">
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "@/layouts/partials/Header.vue";
import Footer from "@/layouts/partials/Footer.vue";
</script>

<style scoped></style>
