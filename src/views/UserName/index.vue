<template>
  <div class="home">
    <v-divider />
    <Username />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Username from '@/components/Username.vue'

@Component({
  components: {
    Username,
  },
})
export default class UserNameIndex extends Vue {}
</script>
