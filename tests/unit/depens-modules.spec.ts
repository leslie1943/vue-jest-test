/**
 * to test @/components/Depends.vue
 * 1: 我们要解决 getLessonList 方法返回假数据问题
 * 2: 我们要解决 Depends.vue 组件正确渲染我们的假数据问题
 *
 * 对于第一个问题, 我们需要新建src/api/__mocks__/lesson.js文件夹, 注意
 * ❗❗❗❗❗:  __mocks__ 是固定写法, 会被 Jest 识别
 * ❗❗❗❗❗: 文件名称写法: __mocks__/lesson.ts,
 *        其中 __mocks__ 目录下的文件名(lesson.ts)要和我们模拟的模块文件名(api/lesson.ts)相同
 *
 * 第二个问题,
 * 我们可以使用 getLessonList.mockResolvedValueOnce() 方法来传入我们模拟的数据
 */
import { shallowMount } from '@vue/test-utils'
import Depends from '@/components/Depends.vue'

/**
 * ----------------------------- -----------------------------
 * 实际上 下面的两句代码 执行的是: `src/api/__mocks__/lesson.ts` 模块
 * 调用的是 src/api/__mocks__/lesson.ts 中 getLessonList 方法
 */
import { getLessonList } from '@/api/lesson'
jest.mock('@/api/lesson.ts')
// ----------------------------- -----------------------------

describe('Depends.vue', () => {
  const lessonsResult = {
    success: true,
    data: [
      { id: 1, title: '深入理解ES6' },
      { id: 2, title: 'JavaScript高级程序设计' },
      { id: 3, title: 'CSS揭秘' },
      { id: 4, title: '深入浅出Vue.js' },
    ],
  }

  it('mock http request', async () => {
    expect.assertions(1) // ✅✅ 表示必须执行一次 expect 代码才算执行完
    /**
     * -------------------
     * -------------------
     * -------------------
     */
    // await getLessonList() 实际上是: src/api/__mocks__/lesson.ts 下的 getLessonList
    const result = await getLessonList()
    expect(result).toEqual(lessonsResult)
  })

  // mock data

  it('render mock http module result', async () => {
    // 接口要返回的数据
    const mock_axios_request_return_data = {
      data: lessonsResult,
    }

    ;(getLessonList as any).mockResolvedValueOnce(
      mock_axios_request_return_data
    )
    const wrapper = shallowMount(Depends)
    await wrapper.vm.$nextTick()

    // 接口返回数据后组件上渲染的内容
    const lessonItems = wrapper.findAll('.lesson-item')

    // 自己定义的数据
    const lessonList = lessonsResult.data

    // 比较组件渲染的内容和预期的内容
    for (let i = 0; i < lessonItems.length; i++) {
      const item = lessonItems.at(i)
      expect(item.text()).toBe(lessonList[i].title)
    }
  })
})
