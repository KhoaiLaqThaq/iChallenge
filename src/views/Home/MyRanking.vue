<template>
  <div class="m-3 mx-auto box">
    <div class="row">
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
      <div class="col-6 text-start">
        <div class="profile-username mt-3">
          <span>{{ account.username }}</span>
          <div class="fullname">{{ account.fullname }}</div>
        </div>
        <div class="account-info">
          <div class="account__time">
            <img src="@/assets/images/icon/icon_oclock.svg" alt="">
            <span>{{ $t('label.joined') }}</span>
            <span class="fw-bold">{{ $d(account.createdDate, 'short') }}</span>
          </div>

          <div class="account__connect">
            <img src="@/assets/images/icon/icon_friend.svg" alt="">
            <span class="follow">{{ $t('label.follow') }}</span>/
            <span class="follower">{{ $t('label.follower') }}</span>
          </div>
        </div>
      </div>

      <div class="col-3">
        <f-button @click="eventListener()" class="mt-2" :title="'label.edit'" :icon="'fa-solid fa-pen'"></f-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { checkRanking } from '@/services/common/checkRanking'
import { FileExpense } from '@/constant/FileExpense'
import FButton from '@/components/common/Button/FButton.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        FButton
    },
    setup() {
        const router = useRouter()
        const { state } = useStore();
        const account = computed(() => state.account)
        const exp = computed(() => state.account.ranking.exp)
        const expToUp = computed(() => state.account.ranking.expToUp)

        function getRankingImageURL() {
            return require(`@/assets/images/rank/${checkRanking(account.value?.ranking?.exp)}${FileExpense.PNG}`);
        }

        function eventListener() {
            router.push({ name: 'ProfileEdit', params: {username: account.value.username} })
        }

        return {
            account, exp, expToUp,

            eventListener,
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

.account-info {
    color: #777;
    .account__time {
        span {
            margin-left: .5rem;
        }
    }

    .account__connect {
        .follow {
            margin-left: .5rem;
        }

    }
}
</style>