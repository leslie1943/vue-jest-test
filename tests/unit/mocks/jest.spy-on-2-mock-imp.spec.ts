import video from '../__utils__/video'

test('2: jest.spyOn understanding', () => {
  /**
   * even the function repeat in module return "true"
   * but here we override the implementation of function repeat ===> return "false"
   * so the video.repeat() will return the value from the mock implementation
   */
  jest.spyOn(video, 'repeat').mockImplementation(() => false) // mock place <<<<1>>>> WORKING
  const isRepeat = video.repeat()
  console.log('🚀 ~ file: jest.spy-on-2-mock-imp.spec.ts ~ line 6 ~ test ~ isRepeat', isRepeat)
  // jest.spyOn(video, 'repeat').mockImplementation(() => false) // mock place <<<<2>>>> NOT WORKING
  expect(isRepeat).toBe(false)
})
