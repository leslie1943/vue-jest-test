<template>
  <div>
    <v-container class="px-0" fluid>
      <v-radio-group v-model="radioGroup">
        <v-radio :id="'rd' + n" v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
      </v-radio-group>

      <v-radio-group v-model="ex7" column>
        <v-radio id="rd_red" label="red" color="red" value="red"></v-radio>
        <v-radio
          id="rd_red_darken"
          label="red darken-3"
          color="red darken-3"
          value="red darken-3"
        ></v-radio>
        <v-radio id="rd_indigo" label="indigo" color="indigo" value="indigo"></v-radio>
        <v-radio
          id="rd_indigo_darken3"
          label="indigo darken-3"
          color="indigo darken-3"
          value="indigo darken-3"
        ></v-radio>
        <v-radio id="rd_orange" label="orange" color="orange" value="orange"></v-radio>
        <v-radio
          id="rd_orange_darken3"
          label="orange darken-3"
          color="orange darken-3"
          value="orange darken-3"
        ></v-radio>
      </v-radio-group>
    </v-container>

    <v-container>
      <v-card>
        <v-card-text>
          {{ ex4 }}
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="ex4"
                  label="red"
                  color="red"
                  value="red"
                  id="ck_red"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="red darken-3"
                  color="red darken-3"
                  value="red darken-3"
                  hide-details
                  id="ck_red_darken-3"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="ex4"
                  label="indigo"
                  color="indigo"
                  value="indigo"
                  id="ck_indigo"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="indigo darken-3"
                  color="indigo darken-3"
                  value="indigo darken-3"
                  id="ck_indigo_darken_3"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="ex4"
                  label="orange"
                  color="orange"
                  value="orange"
                  id="ck_orange"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="orange darken-3"
                  color="orange darken-3"
                  value="orange darken-3"
                  id="ck_orange_darken_3"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandCheck extends Vue {
  radioGroup = 1
  ex7 = 'red'
  ex4 = [
    'red',
    'indigo',
    'orange',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error',
    'red darken-3',
    'indigo darken-3',
    'orange darken-3',
  ]
}
</script>