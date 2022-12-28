<template>
  <div>
    <div class="setting__rightbar mt-3 p-3">
      <div class="settings__menu">
        <div class="setting__info d-flex">
          <img src="@/assets/images/avatar.png" class="flex-center-vertical" width="40" height="40" alt="">
          <div class="account_info">
            <div class="account__name">{{ account.name }}</div>
            <div class="account__action">
              <router-link :to="redirectProfile" class="fw-bold text-primary-theme">
                {{ $t('label.view.yourProfile') }}
              </router-link>
            </div>
          </div>
        </div>
        <ul class="setting-items">
          <li class="setting-item">
            <router-link class="w-100p d-block" :to="{name: 'ProfileEdit', params: {username: account.username}}">{{ $t('label.account.title') }}</router-link>
          </li>
          <li class="setting-item">
            <router-link class="w-100p d-block" :to="{name: 'SettingCourse'}">{{ $t('label.management.course') }}</router-link>
          </li>
          <li class="setting-item">
            <router-link class="w-100p d-block" :to="{name: 'SettingPassword'}">{{ $t('label.password') }}</router-link>
          </li>
          <li class="setting-item">
            <router-link class="w-100p d-block" :to="{name: 'SettingNotifications'}">{{ $t('label.notification') }}</router-link>
          </li>
          <li class="setting-item">
            <router-link class="w-100p d-block" :to="{name: 'SettingPrivacy'}">{{ $t('label.role.private') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from '@/store';

const { state } = useStore();
const account = computed(() => state.account)
const redirectProfile = computed(() => (`/profile/${account.value.username}`))
</script>
<style lang="scss" scoped>
.setting__rightbar {
  display: block;
  position: relative;
  border: 2px solid #77777744;
  border-radius: 10px;
  .settings__menu {
    width: 100%;
    .setting__info {
      margin-bottom: 1rem;
      img {
        border-radius: 50%;
      }
      .account_info {
        display: block;
        margin-left: 1rem;
        text-align: left;
        .account__name {
          font-size: 20px;
          font-weight: 600;
        }
        .account__action {
          text-decoration: underline;
          color: blue;
          cursor: pointer;
        }
      }
    }
    .setting-items {
      padding-left: 0;
      li {
        list-style: none;
        text-align: left;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: .2rem;
        a {
          text-decoration: none;
          color: rgba(0, 0, 0, 0.6352941176);
          padding: 10px 15px;
          border-radius: 10px;
          &.router-link-exact-active {
            background-color: #d0d0d075;
          }
          &:hover {
            background-color: #d0d0d075;
          }
        }
      }
    }
  }
}
</style>