<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{
  src: string
}>()

</script>

<template>
<p align="center">
  <img :src="withBase(props.src)">
  <span class="caption"><slot /></span>
</p>
</template>

<style scoped>
.caption {
  color: gray;
}
</style>
