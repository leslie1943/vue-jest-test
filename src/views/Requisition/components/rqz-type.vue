<template>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col v-for="n in 2" :key="n" cols="8" md="4">
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? '#3a6900' : '#CCCCCC'"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div class="text-h4 flex-grow-1 text-center">
                  Full Time Employee
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>