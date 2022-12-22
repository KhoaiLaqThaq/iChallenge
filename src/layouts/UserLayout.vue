<template>
    <div class="row">
        <router-view class="col-8 py-3"></router-view>
        <the-right-bar class="col-4"></the-right-bar>
    </div>
</template>
<script setup lang="ts">
import TheRightBar from '@/components/decorator/TheRightBar.vue';
</script>
<style lang="">
    
</style>