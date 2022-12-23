<template>
  <div class="container-fluid settings">
    <div class="row">
      <div class="col-md-3 text-end title flex-center-vertical">{{ $t('label.settingAccount.avatar') }}</div>
      <div class="col-md-9">

      </div>
      
    </div>
    <div class="row">
      <div class="col-md-3 text-end title flex-center-vertical">{{ $t('label.settingAccount.name') }}</div>
      <div class="col-md-9">
        <input type="text" class="form-control rounded-10px" v-model="account.name">
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 text-end title flex-center-vertical">{{ $t('label.settingAccount.username') }}</div>
      <div class="col-md-9">
        <input type="text" class="form-control rounded-10px" v-model="account.username">
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 text-end title flex-center-vertical">{{ $t('label.settingAccount.email') }}</div>
      <div class="col-md-9">
        <input type="text" class="form-control rounded-10px" v-model="account.email">
        <div class="notification text-end text-danger" v-if="!account.verifyEmail">
          <span>{{ $t('message.verifyEmail.yet') }}.</span>
          <span class="ms-1"><router-link class="text-danger" :to="generateLinkVerification()">{{ $t('message.verifyEmail.now') }}.</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent, reactive, watch } from 'vue';

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      username: '',
      email: '',
      verifyEmail: false,
      avatar: null
    });

    const { state } = useStore();
    const cid = computed(() => state.account.cid);

    function initData() {
      account.name = state.account.name;
      account.username = state.account.username;
      account.email = state.account.email;
      account.verifyEmail = state.account.verify_email;
    }

    function generateLinkVerification() {
      return `/verify/${cid.value}/email`
    }

    return {
      account,

      initData,
      generateLinkVerification
    }
  },
  beforeCreate() {
    this.initData();
  }
})
</script>
<style lang="scss" scoped>
.settings {
  margin-top: 2rem;
  .row {
    margin-bottom: 1.25rem;

    input[type="text"] {
      background-color: #7777770d;
      border: 2px solid #77777754;
      &:active, &:focus {
        background-color: #fff;
      }
    }
  }
  .title {
    font-weight: 600;
    font-family: din-round,sans-serif;
    font-size: 14px;
  }
}
</style>