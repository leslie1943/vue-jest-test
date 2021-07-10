### vue extends
- A: `PositionMain.vue`: 入口组件
- B: `PositionHomeViewCard.vue`: 中间组件
- C: `BasePostiionCard.vue`: Base 组件
- 其中, `A组件` 调用 `B组件`
- `B组件` extends `C组件`
  
### extends - prop
- `A组件`像`B组件`传递的Props, 如果在 `C组件`已经定义了,就不需要声明
- `A组件`像`B组件`传递的Props, 如果在 `C组件`中没有定义, 可以声明, 同时 Props可以被 `C组件`的模板部分使用
- 但如果 `C组件`在 script 想使用, 那么依然需要定义在 `C组件`的 Prop中

### extends - template
- 如果`B组件`中有`template`,那么 `A组件`中渲染的是`B组件`中`template`中的内容
- 如果`B组件`没有`template`,那么 `A组件`中渲染的是`C组件`中`template`中的内容
- 同样的, `B组件` 可以渲染 `A组件`传递过来的任何`prop`属性,而不用去定义.