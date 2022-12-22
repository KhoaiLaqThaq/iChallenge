<template>
  <the-header></the-header>
  <div class="container">
    <div class="row content">
      <!-- left-bar -->
      <the-sidebar class="col-3"></the-sidebar>
      <!-- /left-bar -->

      <Loading v-if="loading" />
      
      <!-- content -->
      <!-- <router-view></router-view> -->
      <div class="col-9">
        <AppLayout></AppLayout>
      </div>
      <!-- /content -->

      <!-- right-bar -->
      <!-- <the-right-bar class="col-3"></the-right-bar> -->
      <!-- /right-bar -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import TheHeader from "@/components/decorator/TheHeader.vue";
import TheSidebar from "@/components/decorator/TheSidebar.vue";
// import TheRightBar from "@/components/decorator/TheRightBar.vue";
import Loading from '@/components/common/Loading/FLoading.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { useStore } from "./store";

export default defineComponent({
  components: {
    TheHeader,
    TheSidebar,
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

.content {
  // display: flex;
  // background-color: #f0f2f5;
  // height: 100vh;
}
</style>
