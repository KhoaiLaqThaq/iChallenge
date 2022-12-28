<template>
  <div class="mx-auto">
    <div class="label mb-3">
      <h2 class="text-start text-black fw-bold">{{ $t('label.account.title') }}</h2>
    </div>

    <Account></Account>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Account from '@/components/user/settings/Account/index.vue'

export default defineComponent({
  components: {
    Account
  }    
})
</script>
<style lang="">
    
</style>