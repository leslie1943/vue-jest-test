import audio from '../__utils__/asscessType.audio'

test('0: Play audio getter', () => {
  const spyGet = jest.spyOn(audio, 'volume', 'get')
  expect(audio.volume).toBe(0)
  expect(spyGet).toHaveBeenCalled()
})

test('1: Play audio setter', () => {
  const spySet = jest.spyOn(audio, 'volume', 'set')
  audio.volume = 100
  expect(spySet).toHaveBeenCalled()
  expect(audio._volume).toBe(100)
  spySet.mockRestore()
})

test('2: Play audio getter', () => {
  const spyGet = jest.spyOn(audio, 'volume', 'get')
  expect(audio.volume).toBe(100)
  expect(spyGet).toHaveBeenCalled()
})
