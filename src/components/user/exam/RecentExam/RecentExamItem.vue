<template>
    <div class="col-12 d-flex box zoom-in-little mb-3" v-if="exam">
        <div class="exam-thumbnail p-3">
            <img src="@/assets/images/cetification.png" width="100" height="100" alt="">
        </div>
        <div class="exam-info p-3">
            <!-- title -->
            <div class="title">{{ exam.title ? exam.title : $t('label.notfound') }}</div>
            <!-- status -->
            <div class="status">
                <span class="text-secondary">{{ $t('label.status') }}:</span>
                <span class=" fw-bold" 
                    :class="classColor(exam.accountExam.status)" 
                    v-if="exam.accountExam">{{ exam.accountExam.status }}</span>
            </div>
            <div class="joiner">
                <img src="@/assets/images/icon/icon_friend.svg" class="text-secondary" width="18" height="18" alt="">
                <span class="count ms-2">{{ exam.totalMember }}</span>
                <span class="ms-2 text-lowercase">{{ $t('label.memberToJoined') }}</span>
            </div>
            <div class="point" v-if="exam.accountExam">
                <img src="@/assets/images/icon/icon_award.svg" class="text-secondary" width="18" height="18" alt="">
                <span class="ms-2">{{ $t('label.yourpoint') }}: </span>
                <span>{{ exam.accountExam.totalPoint }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
    props: {
        exam: {
            type: Object,
            required: true
        }
    },
    setup() {
        function getClassColorForStatus(status: String) {
            switch(status) {
                case "joined":
                    return "text-info";
                case "begin":
                    return "text-success";
                case "finish":
                    return "text-success";
                case "closed":
                    return "text-warning";
                case "rejected":
                    return "text-danger";
                default:
                    return "text-primary";
            }
        }

        return {
            classColor: getClassColorForStatus
        }
    }
})




</script>
<style lang="scss" scoped>
.exam-thumbnail {
    text-align: left;
}
.exam-info {
    text-align: left;

    .title {
        font-weight: 600;
        font-size: 18px;
    }

    .joiner {
        .count {
            color: #777777;
        }
    }
}
</style>