import fetch from './fetch'

export default {
  async getPostList() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return fetch.fetchPostList((data: any) => {
      console.log('fetchPostList be called!')
      // do something
    })
  },
}
