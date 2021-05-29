<template>
  <div class="home">
    <button id="success" @click="handleSuccess">成功</button>
    <button id="warning" @click="handleWarning">警告</button>
    <button id="error" @click="handleError">错误</button>
    <button id="info" @click="handleInfo">消息</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ name: 'Message' })
export default class Message extends Vue {
  handleSuccess(): void {
    this.$message.success('success')
  }
  handleWarning(): void {
    this.$message.warning('warning')
  }
  handleError(): void {
    this.$message.error('error')
  }
  handleInfo(): void {
    this.$message.info('info')
  }
}
</script>
