<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale" class="form-control">
            <option v-for="(lang, index) in langs" :key="index" :value="lang.langValue">
                {{ lang.title }}
            </option>
        </select>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            langs: [
                { title: 'English', langValue: 'en-US' },
                { title: 'Japanese', langValue: 'ja-JP'},
                { title: 'Vietnamese', langValue: 'vi-VN'}
            ]
        }
    }
})
</script>
