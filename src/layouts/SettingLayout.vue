<template>
    <div class="row">
        <router-view class="col-8 py-3"></router-view>
        <the-setting-right-bar class="col-4"></the-setting-right-bar>
    </div>
</template>
<script setup lang="ts">
import TheSettingRightBar from '@/components/decorator/TheSettingRightBar.vue'
</script>
<style lang="">
    
</style>