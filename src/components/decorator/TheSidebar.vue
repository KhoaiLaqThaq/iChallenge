<template>
    <div>
        <div class="container-brand py-3">
            <ul>
                <li v-for="(item, index) in sidebar" :key="index">
                    <router-link :to="{ name: item.name }" exact class="py-2 ps-2">
                        <img :src="getImgURL(item.imageURL)" alt="#" width="36" height="36">
                        <span class="ps-3">{{ $t(item.title) }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    setup() {
        const {state} = useStore();
        const sidebar = computed(() => state.moduleSidebar.sidebar)

        function getImgURL(imgURL: string) {
            return require(`@/assets/images/${imgURL}`)
        }
        
        return {
            sidebar,

            getImgURL
        }
    }
})
</script>
<style lang="scss" scoped>
.container-brand {
    position: relative;
    display: grid;
    height: calc(100vh - 58px);

    ul {
        list-style: none;
        padding-left: 10px;

        li {
            margin: 0 auto;
            display: flex;
        }

        a {
            text-decoration: none;
            color: #000000a2;
            font-weight: 600;
            width: 100%;
            display: flex;

            span {
                display: flex;
                flex-direction: column;
                justify-content: center;
                vertical-align: middle;
            }
            
            &:hover {
                background-color: #d0d0d075;
                border-radius: 10px;
            }
        }
    }
    .router-link-exact-active {
        border-radius: 10px;
        background-color: #d0d0d075;
    }
}
</style>