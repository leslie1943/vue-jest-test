<template>
  <div>
    <Avatar
      @selected="onChanged"
      :currentImageSrc="null"
      :category="category"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Avatar from '@/components/Upload/Avatar.vue'
@Component({ components: { Avatar } })
export default class UploadAvatar extends Vue {
  private category = 'testforteam'
}
</script>
