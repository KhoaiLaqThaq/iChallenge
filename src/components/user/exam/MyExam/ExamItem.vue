<template>
  <div class="w-22p d-block box py-4 zoom-in exam-item" 
    :title="exam.title"
    @click="checkBeignExam(exam)"
  >
    <!-- <router-link :to="{name: 'ExamBegin', params: {cid: account.cid, examId: exam.id}}"> -->
      <div class="exam-thumbnail">
        <img src="@/assets/images/book.png" width="68" height="68" alt="">
      </div>
      <div class="exam-infor">
        <div class="title">{{ formatLimitCharacters(exam.title, 15) }}</div>
        <div class="time--to__start" v-if="exam.eSetup">
          <span class="fw-bold">{{ $t('label.time.start') }}:</span>
          <span class="ms-1">{{ $d(exam.eSetup.timeToStart, 'long') }}</span>  
        </div>
      </div>

      <div class="exam-time" v-if="exam.eSetup">
        <span class="time-up">{{ exam.eSetup.timeUp }}</span>
        <span class="type ms-2">{{ $t(convertTimeUp(exam.eSetup.timeUpType)) }}</span>
      </div>
    <!-- </router-link> -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

import { convertTimeUp} from '@/services/common/time-helper'
import { formatLimitCharacters } from '@/services/common/StringHelper';
import { useStore } from '@/store';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    exam: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { state } = useStore();
    const account = computed(() => state.account);
    const toast = useToast()
    const router = useRouter()
    const { t } = useI18n()

    function checkBeignExam(exam: any) {
      let now = new Date();
      let checkDate = Math.abs(now.getTime() - exam.eSetup.timeToStart);
      let timeWaitingBeforeStart = 10*60*1000;

      // console.log('checkDate', checkDate);
      if (checkDate && checkDate > timeWaitingBeforeStart)
        toast.warning(t('message.exam.notEnough'), { timeout: 2000 });
      else
        router.push({ name: 'ExamBegin', params: { cid: account.value.cid, examId: exam.id }});
    }

    return {
      account,
      convertTimeUp,
      formatLimitCharacters,
      checkBeignExam,
    }
  }
})
</script>
<style lang="scss" scoped>
.exam {
  position: relative;
  .exam-item {
    border: 1px solid rgba(150, 150, 150, 0.372);
    a {
      color: rgb(70, 70, 70);
      text-decoration: none;
    }
  }
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
      font-size: 12px;
    }
    .time--to__start {
      font-size: 12px;
    }
  }
}

</style>