<template>
  <the-header></the-header>
  <div class="row content">
    <!-- left-bar -->
    <the-sidebar class="col-3"></the-sidebar>
    <!-- /left-bar -->

    <Loading v-if="loading" />
    
    <!-- content -->
    <router-view class="col-6 py-3"></router-view>
    <!-- /content -->

    <!-- right-bar -->
    <the-right-bar class="col-3"></the-right-bar>
    <!-- /right-bar -->

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import TheHeader from "@/components/decorator/TheHeader.vue";
import TheSidebar from "@/components/decorator/TheSidebar.vue";
import TheRightBar from "@/components/decorator/TheRightBar.vue";
import Loading from '@/components/common/Loading/FLoading.vue'
import { useStore } from "./store";

export default defineComponent({
  components: {
    TheHeader,
    TheSidebar,
    TheRightBar,
    Loading,
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
  background-color: #f0f2f5;
  // height: 100vh;
}
</style>
