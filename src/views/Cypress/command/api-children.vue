<template>
  <div>
    <ul>
      <li>About</li>
      <li>
        Services
        <ul class="secondary-nav">
          <li class="services-1">Web Design</li>
          <li class="services-2">Logo Design</li>
          <li class="services-3">
            Print Design
            <ul class="tertiary-nav">
              <li>Signage</li>
              <li>T-Shirt</li>
              <li>Business Cards</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandChildren extends Vue {}
</script>