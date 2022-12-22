<template>
  <div class="mx-auto">
    <div class="label mb-2">
      <p class="text-start">{{ $t('label.title.suggestChallenge') }}</p>
    </div>
    <div class="row">
      
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import SuggestExamItem from '@/components/user/exam/SuggestExam/SuggestExamItem.vue'

export default defineComponent({
  components: {
    SuggestExamItem
  }
})
</script>
<style lang="scss" scoped>
    
</style>