<template>
    <div></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useApiCallStore } from "@/stores/apiCalls";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useApiCallStore();

onMounted(() => {
    const id: string = router.currentRoute.value.params.id.toString();
    console.log(id);
    store.getRecipeDetail(id);
});
</script>

<style scoped></style>
