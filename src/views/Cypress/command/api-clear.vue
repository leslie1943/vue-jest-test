<template>
  <div>
    <v-row>
      <v-col :cols="6">
        <v-text-field id="name" v-model="name" label="name" hide-details="auto"></v-text-field>
        <v-text-field
          id="email"
          @blur="onEmailBlur"
          v-model="email"
          label="email"
          type="email"
        ></v-text-field>
        <v-text-field id="content" v-model="content" label="content" solo></v-text-field>
      </v-col>

      <v-col :cols="6">
        <v-textarea id="area" v-model="area"></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <div id="blur">{{ bluredContent }}</div>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandClear extends Vue {
  name = 'suzhen'
  email = 'suzhen@sina.com'
  content = 'this is content'
  area = 'this is multipe area'

  bluredContent = ''

  onEmailBlur() {
    this.bluredContent = 'content blur name'
  }
}
</script>