import request from '@/service/request'

export async function getCats(): Promise<any> {
  return await request('/api/cats', {
    method: 'GET',
  })
}

export async function getItems(): Promise<any> {}

export default {
  getCats,
}
