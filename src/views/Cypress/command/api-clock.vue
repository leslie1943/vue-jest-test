<template>
  <div>
    <h1>current counter is:</h1>
    <ul>
      <li class="first">
        {{ counter1 }}
      </li>

      <li class="second">
        {{ counter2 }}
      </li>
      <li class="third">
        {{ counter3 }}
      </li>
    </ul>
    <!-- <h1 class="res" style="color: red">{{ counter1 }}</h1>
    <h1 class="res" style="color: tomato">{{ counter2 }}</h1>
    <h1 class="res" style="color: cyan">{{ counter3 }}</h1> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandClock extends Vue {
  counter1 = 0
  counter2 = 10
  counter3 = 100

  mounted() {
    setInterval(() => {
      this.counter1++
      this.counter2++
      this.counter3++
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.counter {
  color: cadetblue;
}
</style>