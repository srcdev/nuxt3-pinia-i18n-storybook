<template>
    <div>
        <h1>Static header text</h1>
        <h1>This from locales, key <em>'header.text'</em> {{ t('header.text') }}</h1>
        <p>Should say "{{ subText }}" as prop</p>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { subText } = defineProps({
    subText: {
        type: String,
        default: ""
    }
});

const { t } = useI18n()
</script>