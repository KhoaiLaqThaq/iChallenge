<template>
  <div class="container-box">
    <my-ranking></my-ranking>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MyRanking from '@/views/Home/MyRanking.vue'

export default defineComponent({
  components: {
    MyRanking
  }
})

</script>
