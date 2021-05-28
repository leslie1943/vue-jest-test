<template>
  <Loading />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Loading from '@/components/Loading'

@Component({ name: 'LoadingIndex', components: { Loading } })
export default class LoadingIndex extends Vue {
}
</script>

<style>
</style>