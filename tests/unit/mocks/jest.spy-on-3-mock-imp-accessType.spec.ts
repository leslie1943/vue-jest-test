import video from '../__utils__/asscessType.video'

test('1: Play video without mockImplementation', () => {
  const spy = jest.spyOn(video, 'play', 'get')
  const isPlaying = video.play
  expect(spy).toHaveBeenCalled()
  expect(isPlaying).toBe(true)
})

test('2: Play video with mockImplementation', () => {
  const spy = jest.spyOn(video, 'play', 'get').mockImplementation(() => false)
  const isPlaying = video.play
  expect(spy).toHaveBeenCalled()
  expect(isPlaying).toBe(false)
})

// TODO: Try computed with accessType
