<template>
  <the-header></the-header>
  <div class="container">
    <Loading v-if="loading" />
    <AppLayout></AppLayout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import TheHeader from "@/components/decorator/TheHeader.vue";
// import TheSidebar from "@/components/decorator/TheSidebar.vue";
// import TheRightBar from "@/components/decorator/TheRightBar.vue";
import Loading from '@/components/common/Loading/FLoading.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { useStore } from "@/store";

export default defineComponent({
  components: {
    TheHeader,
    // TheSidebar,
    // TheRightBar,
    Loading,
    AppLayout
  },
  setup() {
    const {state} = useStore();
    const loading = computed(() => state.loading)

    return {
      loading
    }
  }
})
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden
}
</style>
