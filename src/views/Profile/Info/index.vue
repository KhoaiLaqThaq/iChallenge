<template>
  <div class="container-fluid">
    <profile-detail></profile-detail>
    <statistic></statistic>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import ProfileDetail from '@/components/user/profile/ProfileDetail.vue'
import Statistic from '@/components/user/profile/Statistic.vue'

export default defineComponent({
  components: {
    ProfileDetail,
    Statistic
  }
})
</script>
<style lang="scss">
    
</style>