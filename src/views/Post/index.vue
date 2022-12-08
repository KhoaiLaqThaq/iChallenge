<template>
    <div>
        <label for="" class="alert alert-warning">{{count}} - {{ postTitle }}</label>
        <hr>
        <select v-model="postTitle">
            <option v-for="(post, index) in posts" :key="index" :value="post.title">{{post.title}}</option>
        </select>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { useStore } from '@/store'
import { 
    getPostList
} from '@/services/PostService'
import { IPost } from '@/models/IPost'

export default defineComponent({
    setup() {
        const { state, dispatch } = useStore();
        const count = computed(() => state.count);
        const postTitle = ref('');
        const posts = computed(() => state.modulePost.posts || [] as IPost[]);

        function loadingPosts() {
            getPostList().then(res => {
                if (res.data) {
                    dispatch('loadPosts', res.data)
                }
            }).catch(err => {
                console.log('err: ', err)
            })
        }

        return {
            count,
            postTitle,
            posts,

            loadingPosts
        }
    },
    created() {
        this.loadingPosts()
    }
});

</script>
<style lang="scss">
    
</style>