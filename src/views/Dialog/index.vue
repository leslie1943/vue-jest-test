<template>
  <v-card>
    <v-toolbar color="orange" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dialogs</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="cyan"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(component, index) in dialogs" :key="index">
        <v-card flat>
          <component :is="component" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SimpleDialog from '@/components/Dialogs/SimpleDialog.vue'
import FullDialog from '@/components/Dialogs/FullDialog.vue'
import TransitionDialog from '@/components/Dialogs/TransitionDialog.vue'
import KeepDialog from '@/components/Dialogs/KeepDialog.vue'
import ScrollDialog from '@/components/Dialogs/ScrollDialog.vue'
import FormDialog from '@/components/Dialogs/FormDialog.vue'
import LoadingDialog from '@/components/Dialogs/LoadingDialog.vue'
import OverflowedDialog from '@/components/Dialogs/OverflowedDialog.vue'
import WithoutActivatorDialog from '@/components/Dialogs/WithoutActivatorDialog.vue'
@Component({ name: 'DialogIndex' })
export default class DialogIndex extends Vue {
  tab = null
  items = [
    'Simple-Dialog',
    'Full-Dialog',
    'Transition-Dialog',
    'Keep-Dialog',
    'Scroll-Dialog',
    'Form-Dialog',
    'Loading-Dialog',
    'Overflowed-Dialog',
    'WithoutActivator-Dialog',
  ]
  dialogs = [
    SimpleDialog,
    FullDialog,
    TransitionDialog,
    KeepDialog,
    ScrollDialog,
    FormDialog,
    LoadingDialog,
    OverflowedDialog,
    WithoutActivatorDialog,
  ]
  text = 'Pull request successfully merged and closed.'
}
</script>