<template>
  <div>
    <div class="name">Leslie</div>
    <div class="home"><a href="/">Go home</a></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandDebug extends Vue {}
</script>
<style lang="scss" scoped>
.name {
  font-size: 24px;
  color: cadetblue;
}
</style>