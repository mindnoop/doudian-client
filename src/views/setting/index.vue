<script setup lang='ts'>
import { ref } from 'vue'
const value1 = ref(null)
</script>

<template>
  <div>
    <div>{{ value1 }}</div>
    <a-button type="primary" class="px-4 m-auto space-y-4 text-center max-[400px]">
      点击
    </a-button>
    <a-date-picker v-model:value="value1" :bordered="true" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
  </div>
</template>
