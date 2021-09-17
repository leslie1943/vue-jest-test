<template>
  <v-app-bar :style="layoutStyle">
    <template>
      <v-btn class="mx-3" small dark fab icon @click="toggleDrawer">
        <v-icon dark> mdi-tune </v-icon>
      </v-btn>
      <span style="color: #fff"
        ><span style="color: lightgreen">{{ fullName }} 's</span> Application on
        <span style="color: tomato">{{ currentTime }}</span>
        <span>store module {{ userNumber }}</span></span
      >
      <TopLoadingBar />
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { LayoutStyleType } from '@/types/layout.type'
import TopLoadingBar from '@/components/TopLoading/index.vue'
import { Getter } from 'vuex-class'
import { PassengerStoreModule } from '@/store/modules/passenger'

@Component({ components: { TopLoadingBar } })
export default class AppHeader extends Vue {
  @Prop() layoutStyle!: LayoutStyleType
  @Getter('fullName') fullName!: string
  @Getter('currentTime') currentTime!: string

  userNumber = PassengerStoreModule.userNumber

  toggleDrawer(): void {
    this.$emit('toggle')
  }

  mounted() {
    console.info(this.$store)
  }
}
</script>
