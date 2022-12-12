<template>
  <div class="col-2 ms-3 box py-4 zoom-in exam">
    <div class="exam-thumbnail">
      <img src="@/assets/images/book.png" alt="">
    </div>
    <div class="exam-infor">
      <div class="title">{{ exam.title }}</div>
      <div class="time--to__start" v-if="exam.eSetup">{{ $d(exam.eSetup.timeToStart) }}</div>
    </div>

    <div class="exam-time" v-if="exam.eSetup">
      <span class="time-up">{{ exam.eSetup.timeUp }}</span>
      <span class="type ms-2">{{ $t(convertTimeUp(exam.eSetup.timeUpType)) }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import {
  convertTimeUp
} from '@/services/common/time-helper'

export default defineComponent({
  props: {
    exam: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      convertTimeUp
    }
  }
})
</script>
<style lang="scss" scoped>
.exam {
  position: relative;
  .exam-time {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(119, 119, 119, 0.39);
    padding: 2px;
    border-top-right-radius: 0.375rem;
  }

  .exam-thumbnail {
    margin-bottom: 10px;
  }

  .exam-infor {
    display: block;
    text-align: left;
    
    .title {
      font-weight: 600;
    }

  }
}

</style>