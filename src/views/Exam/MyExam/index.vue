<template>
    <div class="mx-auto">
        <div class="label mb-2">
            <p class="text-start">{{ $t('label.title.myChallenge')}}</p>
        </div>
        <div class="row exam">
            <exam-item v-for="(item, index) in exams" :key="index" :exam="item"></exam-item>
            <show-more :route-path="myExamShowMore"></show-more>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from 'vue';

import { useStore } from '@/store';
import ExamItem from '@/components/user/exam/MyExam/ExamItem.vue';
import ShowMore from '@/components/user/exam/MyExam/ShowMore.vue';
import FModal from '@/components/common/FModal/index.vue';
import ExamItemNotification from '@/components/user/exam/MyExam/ExamItemNotification.vue';

// service
import {
    getTop3MyExam
} from '@/services/ExamService'
import { IExam } from '@/models/IExam';

export default defineComponent({
    components: {
        ExamItem,
        ShowMore,
        FModal,
        ExamItemNotification
    },
    props: {
        cid: {
            type: String,
            required: false
        }
    },
    setup(props) {
        const { commit } = useStore()
        const cid = computed(() => props.cid)
        const exams = ref([] as IExam[])
        const myExamShowMore = computed(() => `/exam/${cid.value}/personal`)

        const examItems = [
            {
                id: 1,
                cid: "1839df12-f23f-4065-ac85-da725569fdcd",
                accountId: 1,
                title: "Exam 15'",
                createdDate: new Date(),
                eSetup: {
                    id: 1,
                    maxMemberJoin: 58,
                    minToStart: 10,
                    timeToStart: new Date(),
                    timeUp: 15,
                    timeUpType: "minute",
                    scope: "protected"
                }
            },
            {
                id: 2,
                cid: "1839df12-f23f-4065-ac85-da725569fdcd",
                accountId: 1,
                title: "Challenge 5'",
                createdDate: new Date(),
                eSetup: {
                    id: 2,
                    maxMemberJoin: 58,
                    minToStart: 10,
                    timeToStart: new Date(),
                    timeUp: 5,
                    timeUpType: "minute",
                    scope: "protected"
                }
            },
            {
                id: 3,
                cid: "1839df12-f23f-4065-ac85-da725569fdcd",
                accountId: 1,
                title: "Challenge speed",
                createdDate: new Date(),
                eSetup: {
                    id: 3,
                    maxMemberJoin: 58,
                    minToStart: 10,
                    timeToStart: new Date(),
                    timeUp: 2.5,
                    timeUpType: "minute",
                    scope: "protected"
                }
            }
        ]

        function initData() {
            commit('setLoading', true)
            getTop3MyExam(cid.value + '').then(res => {
                if (res.data) {
                    exams.value = res.data
                }
            }).catch(err => {
                exams.value = Object.assign([], examItems);
                commit('setError', err.status)
            }).finally(() => {
                commit('setLoading', false)
            })
        }

        return {
            exams,
            myExamShowMore,

            initData
        }
    },
    beforeCreate() {
        this.initData();
    }
})
</script>
<style lang="scss" scoped>
.exam {
    .exam-item:not(:first-child) {
        margin-left: 1rem;
    }
}
</style>