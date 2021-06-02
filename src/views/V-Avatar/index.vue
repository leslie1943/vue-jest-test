<template>
  <div class="text-center">
    <v-row justify="space-around" style="margin-top: 20px">
      <v-avatar color="indigo" size="36">
        <span class="white--text text-h5">36</span>
      </v-avatar>

      <v-avatar color="teal" size="48">
        <span class="white--text text-h5">48</span>
      </v-avatar>

      <v-avatar color="orange" size="62">
        <span class="white--text text-h5">62</span>
      </v-avatar>
    </v-row>

    <div class="text-center">
      <v-avatar tile color="blue">
        <v-icon dark> mdi-alarm </v-icon>
      </v-avatar>
    </div>

    <v-row justify="space-around" style="margin-top: 20px">
      <v-avatar color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>

      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <v-avatar color="red">
        <span class="white--text text-h5">CJ</span>
      </v-avatar>
    </v-row>

    <v-container fluid>
      <v-row justify="center">
        <v-subheader>Today</v-subheader>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                    />
                    <v-icon
                      v-else
                      :color="message.color"
                      v-text="message.icon"
                    ></v-icon>
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only" sm="5" md="3">
                  <strong v-html="message.name"></strong>
                  <span v-if="message.total" class="grey--text">
                    &nbsp;({{ message.total }})
                  </span>
                </v-col>

                <v-col class="text-no-wrap" cols="5" sm="3">
                  <v-chip
                    v-if="message.new"
                    :color="`${message.color} lighten-4`"
                    class="ml-0 mr-2 black--text"
                    label
                    small
                  >
                    {{ message.new }} new
                  </v-chip>
                  <strong v-html="message.title"></strong>
                </v-col>

                <v-col
                  v-if="message.exceprt"
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  &mdash;
                  {{ message.exceprt }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text v-text="lorem"></v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>

    <v-container fluid style="height: 300px; margin-top: 40px">
      <v-row justify="center">
        <v-menu bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="brown" size="48">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="white--text text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Edit Account </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Disconnect </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-row>
    </v-container>

    <v-card class="mx-auto" max-width="434" tile>
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Marcus Obrien
                </v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
type MessageProps = {
  avatar?: string
  name?: string
  title?: string
  exceprt?: string
  color?: string
  icon?: string
  new?: number
  total?: number
}
@Component({})
export default class VAlertIndex extends Vue {
  private lorem =
    'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
  private messages: MessageProps[] = [
    {
      avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
      name: 'John Leider',
      title: 'Welcome to Vuetify!',
      exceprt: 'Thank you for joining our community...',
    },
    {
      color: 'red',
      icon: 'mdi-account-multiple',
      name: 'Social',
      new: 1,
      total: 3,
      title: 'Twitter',
    },
    {
      color: 'teal',
      icon: 'mdi-tag',
      name: 'Promos',
      new: 2,
      total: 4,
      title: 'Shop your way',
      exceprt: 'New deals available, Join Today',
    },
  ]

  private user = {
    initials: 'JD',
    fullName: 'John Doe',
    email: 'john.doe@doe.com',
  }
}
</script>
