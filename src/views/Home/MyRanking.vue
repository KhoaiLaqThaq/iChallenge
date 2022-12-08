<template>
    <div class="mx-auto box">
        <div class="row p-2">
            <div class="col-3">
                <img :src="getRankingImageURL()" alt="" width="127" height="127">
                <div class="title">
                    <h6 class="mb-0">{{ $t('label.level') }}: <span class="fw-bold" v-if="account.ranking">{{ account.ranking.name }}</span></h6>
                    <div class="small fw-bold mb-2">
                        <span class="exp">{{ exp }}</span> /
                        <span class="expToUp">{{ expToUp }}</span>
                    </div>
                </div>
            </div>
            <div class="col-9 d-flex">
                <div class="profile-username mt-3">
                    <span>{{ account.username }}</span>
                    <div class="fullname">{{ account.fullname }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { checkRanking } from '@/services/common/checkRanking'
import { FileExpense } from '@/constant/FileExpense'

export default defineComponent({
    components: {
        
    },
    setup() {
        const { state } = useStore();
        const account = computed(() => state.account)
        const exp = computed(() => state.account.ranking.exp)
        const expToUp = computed(() => state.account.ranking.expToUp)

        function getRankingImageURL() {
            return require(`@/assets/images/rank/${checkRanking(account.value?.ranking?.exp)}${FileExpense.PNG}`);
        }

        return {
            account,
            exp,
            expToUp,

            getRankingImageURL
        }
    }
})
</script>
<style lang="scss" scoped>
.expToUp {
    color: #ff917b;
}

.profile-username {
    font-size: 28px;
    line-height: 34px;
    margin: 0 0 16px;
    word-break: break-word;
    font-family: din-round,sans-serif;
    text-align: left;

    span {
        font-size: 28px;
        line-height: 34px;
        margin: 0 0 16px;
        word-break: break-word;
    }

    .fullname {
        color: #afafaf;
        font-size: 17px;
        font-weight: 500;
        line-height: 20px;
    }
}
</style>