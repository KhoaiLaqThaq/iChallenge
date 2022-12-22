<template>
    <component :is="layout"><router-view /></component>
</template>
<script setup lang="ts">
import { ref, watch, markRaw } from 'vue'

import UserLayout from '@/layouts/UserLayout.vue'
import { useRoute } from 'vue-router';

const layout = ref();
const route = useRoute();

watch(() => route.meta?.layout as string | undefined,
    async (metaLayout) => {
        try {
            const component = metaLayout && await import(`./${metaLayout}.vue`)
            layout.value = markRaw(component?.default || UserLayout)
        } catch (e) {
            layout.value = markRaw(UserLayout)
        }
    },
    { immediate: true }
)

</script>
