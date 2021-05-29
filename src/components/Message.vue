<template>
  <div class="home">
    <v-card class="mx-auto" max-width="1344">
      <v-card-text>
        <div>demo</div>
      </v-card-text>
      <v-card-actions>
        <v-btn id="success" @click="handleSuccess">成功</v-btn>
        <v-btn id="warning" @click="handleWarning">警告</v-btn>
        <v-btn id="error" @click="handleError">错误</v-btn>
        <v-btn id="info" @click="handleInfo">消息</v-btn>
      </v-card-actions>
    </v-card>
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
