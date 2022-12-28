<template>
  <div class="col-12 box">
    <div class="w-100p d-flex text-start">
      <img src="@/assets/images/exam.png" width="40" height="40" alt="">
      <div class="exam__contents">
        <!-- title -->
        <div class="exam__title">
          <span>{{ exam?.title }}</span>
        </div>
        <!-- /title -->

        <!-- description -->
        <div class="exam__description">
          <span class="text-secondary">{{ exam?.description }}</span>
        </div>
        <!-- /description -->
        
        <template v-if="exam.eSetup">
          <!-- timeToStart -->
          <div class="exam__timeToStart">
            <span class="fw-bold">{{ $t('label.time.start') }}:</span>
            <span class="ms-1">{{ $d(exam.eSetup.timeToStart, 'long') }}</span>
          </div>
          <!-- /timeToStart -->

          <!-- condition to start -->
          <div class="exam__totalMembers">
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <span class="ms-1">{{ exam.totalMember }} / {{ exam.eSetup.maxMemberJoin }}</span>
            <span class="ms-1 fw-bold text-warning">({{ $t('label.exam.eSetup.minToStart', [exam.eSetup.minToStart]) }})</span>
          </div>

          <div class="exam__timeUp">
            <span>{{ $t('label.exam.eSetup.period') }}:</span>
            <span class="ms-1 fw-bold">{{ exam.eSetup.timeUp }} {{ formatTimes(exam.eSetup.timeUp, exam.eSetup.timeUpType) }}</span>
          </div>
          <!-- /condition to start -->
        </template>
      </div>
    </div>
    <div class="w-100p text-center">
      <span class="exam__countdown">{{ timeMock }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';

import FButton from '@/components/common/Button/FButton.vue';

import { formatTimes } from '@/services/common/StringHelper';
import ExamService from '@/services/ExamService';
import { IExam } from '@/models/IExam';

export default defineComponent({
  components: {
    FButton
  },
  setup() {
    const { commit } = useStore();
    const route = useRoute();

    const cid = computed(() => route.params?.cid);
    const examId = computed(() => route.params?.examId);
    const exam = ref({} as IExam);

    const timeMock = ref(10);

    watchEffect(() => {
      if (timeMock.value > 0) {
        setTimeout(() => {
          timeMock.value--;
        }, 1000)
      } 
    })


    const mockExam: IExam = {
      id: 1,
      cid: "1839df12-f23f-4065-ac85-da725569fdcd",
      accountId: 1,
      title: "Exam 15'",
      description: "Kiểm tra 15 phút",
      createdDate: new Date(),
      totalMember: 30,
      eSetup: {
        id: 1,
        maxMemberJoin: 58,
        minToStart: 10,
        timeToStart: new Date(),
        timeUp: 15,
        timeUpType: "minute",
        scope: "protected"
      }
    };

    function initData() {
      commit('setLoading', true);

      ExamService.getByCidAndExamId(cid.value, examId.value)
      .then(res => {
        if (res.data) {
          exam.value = res.data;
        }
      })
      .catch((err) => {
        exam.value = mockExam;
        commit('setError', err.status)
      })
      .finally(() => {
        commit('setLoading', false);
      })
    }

    return {
      initData,
      formatTimes,

      exam,
      timeMock
    }
  },
  mounted() {
    this.initData();
  }
})
</script>
<style lang="sass" scoped>
.exam__contents
  padding-left: 1rem
  line-height: 1.5rem
  .exam
    &__title
      font-weight: 600
    &__description
      font-size: 12px

.exam__countdown
  font-size: 36px
  font-weight: 600
  text-shadow: 2px 2px 2px #777777a2
</style>