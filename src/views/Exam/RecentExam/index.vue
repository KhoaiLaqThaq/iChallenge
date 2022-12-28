<template>
    <div class="mx-auto">
        <div class="label mb-2">
            <p class="text-start">{{ $t('label.title.recentChallenge')}}</p>
        </div>
        <div class="row">
            <template v-if="exams.length > 0">
                <recent-exam-item v-for="(exam, index) in exams" :key="index" :exam="exam"></recent-exam-item>
                <template v-if="exams.length > 2">
                    <router-link :to="linkShowmore">{{ $t('label.showMore') }}</router-link>
                </template>
            </template>
            <template v-else>
                <not-found></not-found>
            </template>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import RecentExamItem from '@/components/user/exam/RecentExam/RecentExamItem.vue';
import NotFound from '@/components/user/exam/RecentExam/NotFound.vue';
import { IExam } from '@/models/IExam';

export default defineComponent({
    components: {
        RecentExamItem,
        NotFound
    },
    props: {
        cid: {
            type: String,
            required: false
        }
    },
    setup(props) {
        const cid = computed(() => props.cid)
        const linkShowmore = computed(() => `/exam/${cid.value}/recents`);

        // case empty exams
        // const exams = ref([]);
        // case exist exams
        const exams: IExam[] = [
            {
                id: 1,
                cid: "",
                title: "Challenge everyday",
                topic: "Knowledge",
                accountId: 1,
                createdDate: new Date(),
                totalMember: 10,
                accountExam: {
                    status: 'rejected',
                    totalPoint: "10/15"
                }
            },
            {
                id: 2,
                cid: "",
                title: "Challenge ZERO",
                topic: "Knowledge",
                accountId: 1,
                createdDate: new Date(),
                totalMember: 45,
                accountExam: {
                    status: 'finish',
                    totalPoint: "15/15"
                }
            },
            {
                id: 3,
                cid: "",
                title: "Challenge Speed",
                topic: "Knowledge",
                accountId: 1,
                createdDate: new Date(),
                totalMember: 28,
                accountExam: {
                    status: 'closed',
                    totalPoint: "16/25"
                }
            },
        ];

        return {
            exams,
            linkShowmore
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>