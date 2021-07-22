import axios from 'axios'

export default {
  // eslint-disable-next-line @typescript-eslint/ban-types
  async fetchPostList(callback: Function): Promise<any> {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        timeout: 100000,
      })
      .then((res) => {
        return callback(res.data)
      })
  },
}
