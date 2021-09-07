// class Cook {
//   public name = ''
//   public step = 0
//   constructor(name: string) {
//     this.name = name
//   }
//   first(): this {
//     this.step = 1
//     this.name = 'ready'
//     return this
//   }
//   second(): this {
//     this.step = 2
//     this.name = 'cooking'
//     return this
//   }
//   third(): Cook {
//     this.step = 3
//     this.name = 'doing'
//     return this
//   }
//   last(): this {
//     this.step = 4
//     this.name = 'done'
//     return this
//   }
//   run(): { name: string; step: number } {
//     return this.first().second().third().last()
//   }

//   doRun(): Cook {
//     this.run()
//     return this
//   }
// }

// export default Cook
