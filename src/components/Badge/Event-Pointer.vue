<template>
  <div class="div_grandfather" onclick="alert('grandfather')">
    <div class="div_parent" onclick="alert('parent')">
      <div class="div_child" onclick="alert('child')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class EventPointer extends Vue {}
</script>

<style >
.div_grandfather {
  height: 250px;
  background: orange;
  width: 300px;
  border: 1px solid;
  position: fixed;
}
.div_parent {
  height: 70%;
  background-color: #bbb;
  margin: 30px;
  border: 1px solid;
  pointer-events: auto;
}
.div_child {
  height: 70%;
  background-color: deepskyblue;
  margin: 30px;
  pointer-events: none; /*  点击不会触发 */
}
</style>