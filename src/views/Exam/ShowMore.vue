<template>
    <div class="col-2 show-more">
        <button-next class="px-2 py-3" :routePath="routePath" :buttonTitle="$t('label.showMore')"></button-next>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ButtonNext from '@/components/common/Button/ButtonNext.vue'

export default defineComponent({
    components: {
        ButtonNext
    },
    props: {
        routePath: {
            type: String,
            required: true
        }
    }
})
</script>
<style lang="scss" scoped>
.show-more {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    vertical-align: middle;
}
</style>