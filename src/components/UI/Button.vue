<script setup lang="ts">
import Spinner from "./Spinner.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false,
    },
    fill: {
        type: String,
    },
    outlined: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
    },
    icon: {
        type: String,
    },
    dropdown: {
        type: Boolean,
        default: false,
    },
});
const isDropdown = ref(false);
onMounted(() => {
    if (props.dropdown) {
        window.addEventListener("click", (event) => {
            if (!(event.target as Element).closest("button")) {
                isDropdown.value = false;
            }
        });
    }
});
onBeforeUnmount(() => {
    if (props.dropdown) {
        window.removeEventListener("click", (event) => {
            if (!(event.target as Element).closest("button")) {
                isDropdown.value = false;
            }
        });
    }
});
</script>
<template>
    <div class="button relative">
        <button
            type="button"
            v-ripple
            :disabled="props.loading"
            class="p-ripple flex items-center justify-center flex-wrap p-2 rounded-lg border w-full disabled:opacity-75 font-bold"
            @click="props.dropdown ? (isDropdown = !isDropdown) : ''"
            :class="
                props.outlined
                    ? `border-${props.fill}-500 text-${props.fill}-500`
                    : `bg-${props.fill}-500 text-white border-${props.fill}-500`
            "
        >
            <div class="flex items-center">
                <div class="icon">
                    <Spinner
                        v-if="loading"
                        :label="props.label"
                        :color="
                            props.outlined
                                ? `fill-${props.fill}-500`
                                : 'fill-white'
                        "
                    />
                    <i
                        v-else
                        v-if="props.icon"
                        :class="`flex text-center ${props.icon} ${
                            props.label ? 'mr-1' : ''
                        } h-6 w-6 justify-center items-center`"
                    ></i>
                </div>
                <div class="label whitespace-nowrap">
                    {{ props.label }}
                </div>
            </div>
        </button>
        <div v-if="props.dropdown">
            <slot name="dropdown" v-if="isDropdown" class="" />
        </div>
    </div>
</template>
<style scoped>
.pi {
    display: flex !important;
}
</style>
