<template>
    <nav class="navbar py-0">
        <router-link class="navbar-brand" to="/">
            <img src="@/assets/images/qa.png" width="30" height="30" />
        </router-link>
        
        <f-header-item></f-header-item>

        <div class="settings">
            <f-locale-change></f-locale-change>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import FHeaderItem from '@/components/common/FComponent/FHeaderItem.vue'
import FLocaleChange from '@/components/common/FComponent/FLocaleChange.vue'

export default defineComponent({
    components: {
        FHeaderItem,
        FLocaleChange
    }
})
</script>
<style lang="scss" scoped>
nav {
    height: 58px;
    box-shadow: 2px 2px 11px #ccc;
    .navbar-brand {
        width: 20%;
    }
    .settings {
        width: 20%;
    }
}
</style>