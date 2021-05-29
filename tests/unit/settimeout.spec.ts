/**
 * 在JavaScript中定时器函数有setTimeout和setInterval,
 * 如果我们不对定时器函数做处理的话,
 * 当一个组件有一个延时1000ms的setTimeout时,
 * 则意味着我们测试程序必须等待1000ms,
 * 如果系统中存在很多个setTimeout函数,
 * 那么对于以速度、高效率的单元测试来说无疑是一场灾难.
 * 在不减慢测试速度的情况下测试定时器函数,
 * 看起来唯一的办法就是让异步的定时器替换为同步的定时器函数,
 * 如下：
    setTimeout = () => {
        console.log("replace setTimeout")
    }
    我们可以使用Jest库提供的jest.useFakeTimers(),
    当这个方法被调用时Jest提供的假定时器会替换全局定时器函数来工作,
    然后我们可以使用jest.runTimersToTime()来推进时间.
 */
import { shallowMount, Wrapper } from '@vue/test-utils'
import SetTimeout from '@/components/SetTimeout.vue'

describe('SetTimeout.vue', () => {
  let wrapper: Wrapper<SetTimeout>

  /**
   * beforeEach:
   * 因为我们在两个测试用例中都要使用Jest提供的 假定时器函数(useFakeTimers),
   * 因此我们可以在beforeEach钩子函数中来使用.同样的道理,
   * 我们在beforeEach钩子函数中重新挂载组件,避免多个测试用例互相影响
   *
   */
  beforeEach(() => {
    // 调用Jest.useFakeTimers 会提供的假定时器会替换全局定时器函数来工作
    jest.useFakeTimers()

    wrapper = shallowMount(SetTimeout)
  })

  // 单独的测试用例
  it('test settimeout async timer', () => {
    expect(wrapper.vm.$data.timeText).toBe('')
    jest.runTimersToTime(1000)
    expect(wrapper.vm.$data.timeText).toBe('setTimeout text')
  })

  it('test setInterval async timer', () => {
    const { $data } = wrapper.vm
    // just test this is isolate case start
    expect($data.timeText).toBe('')
    // just test this is isolate case finish

    // initial value
    expect($data.percent).toBe(0)
    // run timer
    ;(wrapper.vm as any).start()
    // go 0.1 sec
    jest.runTimersToTime(100)
    // assert
    expect($data.percent).toBe(1)
    // go another 0.9 sec, 1 sec went totally 🚀
    jest.runTimersToTime(900)
    expect($data.percent).toBe(10)
    // go another 2 sec 3 sec went totally 🚀
    jest.runTimersToTime(2000)
    expect($data.percent).toBe(30)
  })

  /**
   * 我们还需要测试clearInterval()是否成功执行
   * 以确保我们没有写一个无限运行的定时器
   *
   * 如何测试clearInterval()函数被执行了
   * 如何测试clearInterval()携带的参数
   *
   * 要解决以上第一个问题
   * 我们需要使用Jest提供的jest.spyOn()函数
   * 然后对window.clearInterval()进行间谍伪造
   * jest.spyOn(window, "clearInterval")
   *
   * 要解决第二个问题
   * 我们可以使用Jest提供的mockReturnValue函数来模拟任何我们想要的返回值
   * 如下
   * setInterval.mockReturnValue(996)
   *
   * 当我们的测试代码使用了我们不能控制的API时,
   * 我们可以使用 spy 来伪装,
   * 随后判断我们伪装的API是否被调用。
   */
  it('clearInterval successfully when percent >= 100', () => {
    jest.spyOn(window, 'clearInterval') // 伪造 clearInterval
    ;(setInterval as any).mockReturnValue(800) // 模拟 setInterval 返回值
    ;(wrapper.vm as any).start()
    ;(wrapper.vm as any).finish()
    expect(wrapper.vm.$data.percent).toBe(100)
    // 使用伪造的 clearInterval 去清除
    expect(window.clearInterval).toHaveBeenCalledWith(800)
  })
})
