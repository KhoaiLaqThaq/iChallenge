<template>
  <div class="row m-4 pb-4 account--profile border-bottom-theme">
    <div class="col-3">
      <div class="account--profile__avatar">
        <img src="@/assets/images/profile_ava.jpg" class="rounded-full" height="180" width="180" alt="">
        <div class="action__edit">
          <font-awesome-icon icon="fa-solid fa-pen" />
        </div>
      </div>
    </div>
    <div class="col-6 text-start">
      <div class="account--profile__username text-body-theme mb-3">
        <div class="fw-bold f-z24px">Henry Nguyen</div>
        <div class="username">henry_nguyen</div>
      </div>

      <div class="account--profile__time mb-2">
        <font-awesome-icon icon="fa-solid fa-clock" class="text-primary-theme" />
        <span class="ms-2 text-secondary">{{ $d(new Date(), 'short') }}</span>
      </div>

      <div class="account--profile__network mb-2">
        <font-awesome-icon icon="fa-solid fa-users" />
        <span class="ms-2 text-secondary">2 Following / 2 Followers</span>
      </div>

      <div class="account--profile__challenge">
        <font-awesome-icon icon="fa-solid fa-dice" class="text-warning" />
        <span class="ms-2 text-secondary">Joined 10 Challenges</span>
      </div>
    </div>

    <div class="col-3 text-end">
      <f-button @click="eventListener()" :btn-type="'button'" :color="'primary'" :icon="'fa-solid fa-pen'" :title="'EDIT PROFILE'"></f-button>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

import FButton from '@/components/common/Button/FButton.vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';

export default defineComponent({
  components: {
    FButton
  },
  setup() {
    const router = useRouter();
    const { state } = useStore();
    const username = computed(() => state.account.username)

    function eventListener() {
      router.push({ name: 'ProfileEdit', params: {username: username.value} })
    }

    return {
      eventListener
    }
  }
})
</script>
<style lang="scss" scoped>
.account--profile {
  .account--profile__avatar {
    position: relative;

    .action__edit {
      background-color: hsl(199deg 80% 47%);
      color: #FFF;
      border: 2px solid #FFF;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      right: 35px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  .account--profile__username {
    .username {
      color: #afafaf;
    }
  }
}
</style>