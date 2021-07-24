import video from '@/jest-fns/video'

describe('Test jest.spyOn ', () => {
  it('Test jest.spyOn => toHaveBeenCalled 1', () => {
    const onPlay = jest.spyOn(video, 'play')
    onPlay.mockReturnValue(true) // video.play() 返回值不定, 需要 mock return value
    const playStatus = video.play() // 此时方法返回值不确定
    expect(onPlay).toHaveBeenCalled()
    expect(playStatus).toBe(true)
  })

  it('Test jest.spyOn => toHaveBeenCalled 2', () => {
    const spyPlay = jest.spyOn(video, 'play')
    spyPlay.mockReturnValue(false)
    expect(spyPlay).toHaveBeenCalled()
    expect(video.play()).toBe(false)
    spyPlay.mockRestore()
  })

  it('Test jest.spyOn => toHaveBeenCalledTimes 1', () => {
    const spyPlay = jest.spyOn(video, 'play')
    spyPlay.mockReturnValue(true)

    const playing = video.play()
    expect(spyPlay).toHaveBeenCalled()
    expect(spyPlay).toHaveBeenCalledTimes(1)
    expect(playing).toBe(true)

    spyPlay.mockRestore()
  })

  it('Test jest.spyOn => toHaveBeenCalledTimes 2', () => {
    const spyPlay = jest.spyOn(video, 'play')
    spyPlay.mockReturnValue(true)

    const playing = video.play()
    expect(spyPlay).toHaveBeenCalled()
    expect(spyPlay).toHaveBeenCalledTimes(1)
    expect(playing).toBe(true)

    // 再次触发
    video.play()
    expect(spyPlay).toHaveBeenCalledTimes(2)

    spyPlay.mockRestore()
  })
})
