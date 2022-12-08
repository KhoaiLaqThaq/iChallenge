<template>
    <div class="router-items">
        <router-link to="/">
            <img src="@/assets/images/winner.png" width="40" height="40">
            <div class="tooltip">{{ $t('label.conquer') }}</div>
        </router-link>
        <router-link to="/exam">
            <img src="@/assets/images/book.png" width="40" height="40">
            <div class="tooltip">{{ $t('label.exams') }}</div>
        </router-link>
        <router-link to="/question">
            <img src="@/assets/images/question.png" width="40" height="40">
            <div class="tooltip">{{ $t('label.question') }}</div>
        </router-link>
        <router-link to="/report">
            <img src="@/assets/images/bao_cao.png" width="40" height="40">
            <div class="tooltip">{{ $t('label.report') }}</div>
        </router-link>
        <router-link to="/setting">
            <img src="@/assets/images/setting.png" width="40" height="40">
            <div class="tooltip">{{ $t('label.settings') }}</div>
        </router-link>
    </div>
</template>
<script lang="ts">

export default {
    
}
</script>
<style lang="scss" scoped>
a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    padding: 5px 35px;
    position: relative;

    &.router-link-exact-active {
        &::before {
            content: "";
            position: absolute;
            top: 100%;
            left: 0px;
            right: 0;
            height: 4px;
            border-radius: 2px;
            background-color: #9beaf9;
        }
        &:hover {
            background-color: unset;
        }
    }

    .tooltip {
        position: absolute;
        width: 100%;
        bottom: 0;
        font-size: 14px;
        background: #ffffff;
        color: #ffffff;
        padding: 5px 8px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &:hover {
        border-radius: 10px;
        background-color: #f0f2f5;
        z-index: 9999;
        .tooltip {
            font-weight: 600;
            padding: 10px;
            left: 0;
            bottom: -50px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }
    }

    &:hover .tooltip,
    &:hover .tooltip::before {
        background: rgb(123, 123, 123);
        color: #ffffff;
        opacity: .9;
    }
}
</style>