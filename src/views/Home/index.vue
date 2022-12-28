<template>
  <div class="container-box">
    <my-ranking></my-ranking>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MyRanking from '@/views/Home/MyRanking.vue'
import TheRightBar from "@/components/decorator/TheRightBar.vue";

export default defineComponent({
  components: {
    MyRanking,
    TheRightBar
  }
})

</script>
