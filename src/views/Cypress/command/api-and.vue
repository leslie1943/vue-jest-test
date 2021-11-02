<template>
  <div>
    <v-btn color="primary"
      >Create an assertion. Assertions are automatically retried until they pass or time out.
    </v-btn>
    <ul>
      <li>
        <a href="users/123/edit">Edit User</a>
      </li>
      <li>
        <a href="#/users/123/edit">Edit User</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandAnd extends Vue {}
</script>