<template>
    <div class="mx-auto">
        <div class="row exam">
            <exam-item v-for="(item, index) in exams" :key="index" :exam="item"></exam-item>
            <show-more :route-path="myExamShowMore"></show-more>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, computed, watch } from 'vue';

import { useStore } from '@/store';
import ExamItem from '@/views/Exam/ExamItem.vue';
import ShowMore from '@/views/Exam/ShowMore.vue';

// service
import {
    getTop3MyExam
} from '@/services/ExamService'

export default defineComponent({
    components: {
        ExamItem,
        ShowMore,
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
        const exams = ref([])
        const myExamShowMore = computed(() => `/exam/${cid.value}/personal`)

        const examItems = [
            {
                id: 1,
                cid: "1839df12-f23f-4065-ac85-da725569fdcd",
                accountId: 1,
                title: "Kiem tra 1 tiet",
                createdDate: new Date(),
                eSetup: {
                    id: 1,
                    maxMemberJoin: 58,
                    minToStart: 10,
                    timeToStart: new Date(),
                    timeUp: 10,
                    timeUpType: "minute",
                    scope: "protected"
                }
            },
            {
                id: 1,
                cid: "1839df12-f23f-4065-ac85-da725569fdcd",
                accountId: 1,
                title: "Kiem tra 1 tiet",
                createdDate: new Date(),
                eSetup: {
                    id: 1,
                    maxMemberJoin: 58,
                    minToStart: 10,
                    timeToStart: new Date(),
                    timeUp: 10,
                    timeUpType: "minute",
                    scope: "protected"
                }
            },
            {
                id: 1,
                cid: "1839df12-f23f-4065-ac85-da725569fdcd",
                accountId: 1,
                title: "Kiem tra 1 tiet",
                createdDate: new Date(),
                eSetup: {
                    id: 1,
                    maxMemberJoin: 58,
                    minToStart: 10,
                    timeToStart: new Date(),
                    timeUp: 10,
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
    
</style>