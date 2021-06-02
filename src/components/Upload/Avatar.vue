<template>
  <v-list-item two-line class="pa-2">
    <v-list-item-avatar size="88">
      <v-avatar size="88" color="grey lighten-1">
        <img v-if="url" :src="url" />
        <span v-else class="white--text">Preview</span>
      </v-avatar>
    </v-list-item-avatar>
    <v-list-item-content>
      <div>
        <v-btn outlined @click="onClick">Upload</v-btn>
        <input
          ref="uploader"
          class="d-none"
          type="file"
          accept="image/*"
          @change="onFileChange"
          @click="onFileClick"
        />
      </div>
      uploadedImageSrc{{ uploadedImageSrc }}
      <div class="mt-4">
        <v-icon medium @click="deleteFile" :disabled="!uploadedImageSrc"
          >mdi-trash-can-outline</v-icon
        >
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Watch, Emit } from 'vue-property-decorator'
@Component({})
export default class UploadAvatar extends Vue {
  @Prop() currentImageSrc!: string | null
  @Prop() category!: string
  @Ref('uploader') uploader!: HTMLElement
  uploadedImageSrc: string | null = ''

  onClick(): void {
    this.uploader.click()
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async onFileChange(e: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.info('e', e)
    // const [uploadedFile] = e.target.files
    this.uploadedImageSrc = 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onFileClick(e: any): void {
    if (!this.uploadedImageSrc) {
      e.target.value = null
    }
  }

  get url(): string | null {
    return this.uploadedImageSrc
      ? this.getUrlBySrc(this.uploadedImageSrc)
      : this.currentImageSrc
      ? this.getUrlBySrc(this.currentImageSrc)
      : null
  }

  getUrlBySrc(imageSrc: string): string {
    // return `sss/${imageSrc}`
    return imageSrc
  }

  deleteFile(): void {
    this.uploadedImageSrc = null
  }

  @Watch('uploadedImageSrc')
  @Emit('selected')
  selected(): string | null {
    console.info('watch selected')
    return this.uploadedImageSrc
  }
}
</script>
