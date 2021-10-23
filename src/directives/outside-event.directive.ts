export default {
  bind: function (el: any, binding: any, vNode: any) {
    el._outsideEvent_ = (event: any) => {
      if (!el.contains(event.target)) {
        // call method provided in v-click-outside value
        vNode.context[binding.expression](event)
        event.stopPropagation()
      }
    }
    document.body.addEventListener('click', el._outsideEvent_)
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unbind: function (el: any, _binding: any, _vNode: any) {
    // Remove Event Listeners
    document.body.removeEventListener('click', el._outsideEvent_)
    el._outsideEvent_ = null
  },
}
