// function Path(path: string) {
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   return function (target: Function) {
//     !target.prototype.$Meta && (target.prototype.$Meta = {})
//     target.prototype.$Meta.baseUrl = path
//   }
// }

// @Path('/hello')
// class HelloService {
//   constructor() {}
// }

// console.info(HelloService.prototype.$Meta)
// const hello = new HelloService()
// console.info(hello.$Meta)
