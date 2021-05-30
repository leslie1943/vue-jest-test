import axios from 'axios'

export type Lesson = {
  id: number
  title: string
}

type APIData = {
  data: { success: boolean; data: Array<Lesson> }
}
export function getLessonList(): Promise<APIData> {
  return axios.get('http://www.dell-lee.com/react/api/list.json')
}
