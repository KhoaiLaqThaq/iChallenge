<template>
  <the-header></the-header>
  <div class="content">
    <!-- sidebar -->
    <the-sidebar class="col-3"></the-sidebar>
    <!-- /sidebar -->
    <router-view class="col-6"/>

    <div class="col-3">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheHeader from "@/components/decorator/TheHeader.vue";
import TheSidebar from "@/components/decorator/TheSidebar.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheSidebar
  }
})
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  background-color: #f0f2f5;
  height: 100vh;
}
</style>
