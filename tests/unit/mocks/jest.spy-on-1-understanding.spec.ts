import video from '../__utils__/video'

test('1: jest.spyOn understanding', () => {
  /**
   * Creates a mock function similar to jest.fn
   *          ++++++++++
   * but_also 🎃 <<<< tracks >>>> 🎃 calls to object[methodName]
   */
  const spyPlay = jest.spyOn(video, 'play')
  const isPlaying = video.play() // spyPlay 会记录track这次调用
  expect(spyPlay).toHaveBeenCalled()
  expect(isPlaying).toBe(true)
  spyPlay.mockRestore()
})
