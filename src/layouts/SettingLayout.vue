<template>
  <div class="row content">
    <!-- left-bar -->
    <the-sidebar class="col-3"></the-sidebar>
    <!-- /left-bar -->
    <div class="col-9">
      <div class="row">
        <router-view class="col-8 py-3"></router-view>
        <the-setting-right-bar class="col-4"></the-setting-right-bar>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheSidebar from "@/components/decorator/TheSidebar.vue";
import TheSettingRightBar from '@/components/decorator/TheSettingRightBar.vue'
</script>
