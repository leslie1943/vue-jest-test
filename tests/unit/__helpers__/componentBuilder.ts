/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { merge } from 'lodash/fp'
import Vuetify from 'vuetify'
import { Component } from 'vue'
import VueBus from 'vue-bus'
import VueCoookies from 'vue-cookies-ts'

export default class ComponentBuilder {
  component: any
  router: any
  actions: any
  getters: any
  methods: any
  mutations: any
  props: any
  propsData: any
  state: any
  store: any
  localVue: any
  mocks: any
  stubs: any
  provide: any
  mixins: any

  constructor(component: any, vueElements = []) {
    // the property of initial
    this.component = component
    this.router = new VueRouter()
    this.actions = {}
    this.getters = {}
    this.mutations = {}
    this.propsData = {}
    this.state = {}
    this.store = {}
    this.stubs = []
    this.provide = {}
    this.mixins = []
    // use localVue to mock plugins
    this.localVue = createLocalVue()
    this.localVue.use(Vuex)
    this.localVue.use(VueRouter)
    this.localVue.use(VueBus)
    this.localVue.use(VueCoookies)
    // register mixin plugins
    this.mixins.map((mixin: any) => this.localVue.mixins(mixin))

    vueElements.forEach((e) => this.localVue.use(e))
  }

  // static init(component: any, vueUse: any) {
  //   return new ComponentBuilder(component, vueUse)
  // }

  addActions(actions = {}): ComponentBuilder {
    this.actions = merge(this.actions, actions)
    return this
  }

  addGetters(getters = {}): ComponentBuilder {
    this.getters = merge(this.getters, getters)
    return this
  }

  addProvide(provide = {}): ComponentBuilder {
    this.provide = merge(this.provide, provide)
    return this
  }

  addMethods(methods = {}): ComponentBuilder {
    this.methods = merge(this.methods, methods)
    return this
  }

  addMutations(mutations = {}): ComponentBuilder {
    this.mutations = merge(this.mutations, mutations)
    return this
  }

  addProps(props = {}): ComponentBuilder {
    this.props = merge(this.props, props)
    this.propsData = merge(this.propsData, props)
    return this
  }

  // addPropsData(data = {}): ComponentBuilder {
  //   this.propsData = merge(this.props, data)
  //   return this
  // }

  addRouteLocation(location = {}): ComponentBuilder {
    this.router.push(location)
    return this
  }

  addState(state = {}): ComponentBuilder {
    this.state = merge(this.state, state)
    return this
  }

  addMocks(mocks = {}): ComponentBuilder {
    this.mocks = merge(this.mocks, mocks)
    return this
  }

  addStore(store = {}): ComponentBuilder {
    this.store = merge(this.store, store)
    return this
  }

  addMixins(mixin = {}): ComponentBuilder {
    this.mixins = [mixin, ...this.mixins]
    return this
  }

  addStubs(stubs: { [name: string]: Component | string | boolean } | Array<string>): ComponentBuilder {
    this.stubs = stubs
    return this
  }

  // computed to get options for `mount` | `shallowMount` event
  get config() {
    return {
      localVue: this.localVue,
      methods: this.methods,
      mocks: this.mocks,
      router: this.router,
      propsData: this.propsData,
      store: new Vuex.Store(
        merge(this.store, {
          actions: this.actions,
          getters: this.getters,
          mutations: this.mutations,
          state: this.state,
        })
      ),
      vuetify: new Vuetify(),
      stubs: this.stubs,
      mixins: this.mixins,
    }
  }

  shallowMount() {
    return shallowMount(this.component, this.config)
  }

  mount() {
    return mount(this.component, this.config)
  }
}
