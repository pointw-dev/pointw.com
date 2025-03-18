<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{
  name: string
  github?: boolean
  pypi?: boolean
  npm?: boolean
  docker?: boolean
  ruby?: boolean
}>()

</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>Find more on:</td>
      <td v-if="props.github"><a target="_blank" :href="'https://github.com/pointw-dev/' + props.name"><img src="/img/tech/github.svg" width="32"></a></td>
      <td v-if="props.pypi"><a target="_blank" :href="'https://pypi.org/project/' + props.name"><img src="/img/tech/pypi.svg" width="32"></a></td>
      <td v-if="props.npm"><a target="_blank" :href="'https://www.npmjs.com/package/' + props.name"><img src="/img/tech/npm.svg" width="50"></a></td>
      <td v-if="props.docker"><a target="_blank" :href="'https://hub.docker.com/repository/docker/pointw/' + props.name + '/general'"><img src="/img/tech/docker.svg" width="32"></a></td>
      <td v-if="props.ruby"><a target="_blank" :href="'https://rubygems.org/gems/' + props.name"><img src="/img/tech/rubygems.svg" width="32"></a></td>
    </tr>
  </tbody>
  </table>
</template>

<style scoped>
td, th, tr, table {
  border: 0 !important;
  border-spacing:0 !important;
}
</style>
