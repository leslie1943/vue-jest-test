<template>
  <div class="home">
    <Quantity :age="19" :msg="'hello'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Quantity from '@/components/Quantity.vue'

@Component({
  components: {
    Quantity,
  },
})
export default class QuantityIndex extends Vue {}
</script>
