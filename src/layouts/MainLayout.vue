<template>
    <Header />
    <div class="w-[1024px] m-auto">
        <router-view></router-view>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Header from "@/layouts/partials/Header.vue";
import Footer from "@/layouts/partials/Footer.vue";
</script>

<style scoped></style>
