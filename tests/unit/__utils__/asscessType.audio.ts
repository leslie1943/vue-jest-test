const audio = {
  _volume: 0,

  set volume(value: number) {
    this._volume = value
  },
  get volume(): number {
    return this._volume
  },
}

export default audio
