<template>
  <div class="modal fade" :id="modalId" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
      <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    modalId: {
      type: String,
      required: true
    }
  }
})
</script>
