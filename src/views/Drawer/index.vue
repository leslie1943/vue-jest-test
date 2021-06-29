<template>
  <div>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer"> Toggle </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer width="80%" v-model="drawer" right absolute temporary>
      <v-toolbar color="cyan" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Settings</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-row>
        <v-col>
          <v-list subheader three-line>
            <v-list-item v-for="i in 10" :key="i">
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>
                  <v-alert color="blue-grey" dark icon="mdi-school" prominent>
                    Set the content filtering level tering level to rSet the content filtering level to restrict appts that can be downloaded
                  </v-alert>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- <v-divider></v-divider> -->

      <!-- <v-list flat subheader three-line>
          <v-subheader>General</v-subheader>

          <v-list-item-group v-model="settings" multiple active-class="">
            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
      <!-- </v-card> -->
      <!-- <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <!-- <v-divider></v-divider> -->
      <!-- 
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({ name: 'DrawerIndex' })
export default class DrawerIndex extends Vue {
  drawer = null
  settings = []
  items = [
    { title: 'Home', icon: 'mdi-view-dashboard' },
    { title: 'About', icon: 'mdi-forum' },
  ]
}
</script>