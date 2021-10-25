export default {
  // bind: 只调用一次,指令第一次绑定到元素时调用,用这个钩子函数可以定义一个在绑定时执行一次的初始化动作.
  // bind: call once,  the first time when directive binding to element.
  // can use this hook define init event handler
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
  // unbind: 只调用一次, 指令与元素解绑时调用.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unbind: function (el: any, _binding: any, _vNode: any) {
    // Remove Event Listeners
    document.body.removeEventListener('click', el._outsideEvent_)
    el._outsideEvent_ = null
  },
}
