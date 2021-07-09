### vue extends
- A: `PositionMain.vue`: 入口组件
- B: `PositionHomeViewCard.vue`: 中间组件
- C: `BasePostiionCard.vue`: Base 组件
- 其中, A组件 调用 B组件
- B组件 extends C组件
  
### extends - prop
- A组件像B组件传递的Props, 如果在 C组件已经定义了,就不需要声明
- A组件像B组件传递的Props, 如果在 C组件中没有定义, 可以声明, 同时 Props可以被 C组件的模板部分使用
- 但如果 C组件在 script 想使用, 那么依然需要定义在 C组件的 Prop中