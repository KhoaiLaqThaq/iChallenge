<template>
    <div class="container-box">
        <!-- my exams -->
        <my-exam v-id="cid" :cid="cid" class="mb-3"></my-exam>
        <!-- /my exams -->
        
        <!-- recent exams -->
        <recent-exam class="mb-3" :cid="cid"></recent-exam>
        <!-- /recent exams -->

        <!-- suggest exams -->
        <suggest-exam></suggest-exam>
        <!-- /suggest exams -->
    </div>
</template>
<script lang="ts">
import { watch, computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import { useStore } from '@/store';
import MyExam from '@/views/Exam/MyExam/index.vue'
import RecentExam from '@/views/Exam/RecentExam/index.vue'
import SuggestExam from '@/views/Exam/SuggestExam/index.vue';

export default defineComponent({
    components: {
        MyExam,
        RecentExam,
        SuggestExam,
    },
    setup() {
        const { dispatch } = useStore()
        const route = useRoute()
        const cid = computed(() => route.params?.cid)

        watch(cid, () => {
            console.log("set cid when user signed in")
            dispatch('setCid', cid.value)
        })

        return {
            cid
        }
    }
})
</script>
<style lang="scss" scoped>
    
</style>